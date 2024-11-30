import { TableBasicProps, TheadItem } from '@/modules/core/components/shared/BasicTable/types'
import { useState } from 'react'
import { isArrayEmpty } from '@/modules/core/utils'
import Swal from 'sweetalert2'

const useBasicTable = ({
  thead = [],
  data = [],
  showWatchButton,
  showEditButton,
  showDeleteButton,
  onChange,
}: TableBasicProps) => {
  const showActions = showWatchButton || showEditButton || showDeleteButton
  const [internalData, setInternalData] = useState<any>(data)
  const externalControlsActivated = typeof onChange === 'function'
  const _data = externalControlsActivated ? data : internalData
  const onChangeFn = externalControlsActivated ? onChange : setInternalData

  const getTheadItems = (): Array<TheadItem> => {
    if (!thead || isArrayEmpty(thead)) {
      if (_data && !isArrayEmpty(_data)) {
        return Object.keys(_data[0]).map((item) => ({
          type: 'text',
          label: item,
          keyName: item,
        }))
      }
      return []
    }

    return thead
  }

  const handleOnChange = (itemIndex: number) => {
    return (event: any) => {
      const { name, value } = event.target
      const newValues = _data.map((item: any, index: number) => {
        if (index !== itemIndex) {
          return item
        }

        return {
          ...item,
          [name]: value,
        }
      })

      onChangeFn(newValues)
    }
  }

  const handleOnDeleteItem = (indexItem: number) => {
    return () => {

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      })
      swalWithBootstrapButtons
        .fire({
          title: 'Confirmar',
          text: '¿Deseas eliminar esta API?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, eliminar',
          cancelButtonText: 'No, cancelar!',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            onChangeFn(
              _data.filter((_: any, index: number) => indexItem !== index)
            )
          }
        })
    }
  }

  const theadComputed = getTheadItems()

  return {
    showActions,
    tableData: _data,
    theadComputed,
    handleOnChange,
    handleOnDeleteItem,
  }
}

export default useBasicTable
