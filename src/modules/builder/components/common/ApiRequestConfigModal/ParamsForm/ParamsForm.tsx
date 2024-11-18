import classNames from 'classnames'
import ButtonComponent from '@/modules/core/components/shared/Button'
import { ButtonGroup } from '@mui/material'
import { ParamsFormWrapper } from './styles'
import { uuidv4 } from '@/modules/core/utils'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import useTabsInternalState from '@/modules/builder/components/shared/TabsRenderer/useTabsInternalState'
import TableBasic from '@/modules/core/components/shared/BasicTable'
import { TheadItem } from '@/modules/core/components/shared/BasicTable/types'
import Swal from 'sweetalert2'

interface Props {
  id?: string
  name?: string
  parentName?: string
  variant?: 'contained' | 'outlined' | 'unborder'
  onChange?: any
  formHandler?: FormHandlerProps
}

const getParamDefinition = () => {
  return { id: uuidv4(), label: '', value: '', description: '' }
}

const ParamsForm: React.FC<Props> = ({
  id = uuidv4(),
  variant,
  parentName = uuidv4(),
  formHandler,
}) => {
  const [params, setParams] = useTabsInternalState({
    tabName: parentName,
    tabId: id,
    defaultValue: [],
    formHandler,
  })

  const getTheadsFields = () => {
    const theads: TheadItem[] = [
      { label: 'NAME', keyName: 'name', type: 'text' },
      { label: 'VALUE', keyName: 'value', type: 'text' },
    ]

    return theads
  }

  const addParamItem = () => {
    setParams((oldParams: any) => [...oldParams, getParamDefinition()])
  }

  const handleDeleteAll = () => {
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
        text: '¿Deseas eliminar todos los parámetros?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setParams([getParamDefinition()])
        }
      })
  }

  const onChange = (newList: any) => {
    setParams(newList)
  }

  return (
    <ParamsFormWrapper className={classNames(variant)}>
      <ButtonGroup>
        <ButtonComponent variant='outlined' onClick={addParamItem}>
          Agregar
        </ButtonComponent>

        <ButtonComponent variant='outlined' onClick={handleDeleteAll}>
          Eliminar todo
        </ButtonComponent>
      </ButtonGroup>

      <TableBasic
        confirmationMessage='¿Desea eliminar este parámetro?'
        emptyTableMessage='No hay parámetros para mostrar'
        className='table mt-1'
        thead={getTheadsFields()}
        data={params}
        onChange={onChange}
        showDeleteButton
      />
    </ParamsFormWrapper>
  )
}

export default ParamsForm
