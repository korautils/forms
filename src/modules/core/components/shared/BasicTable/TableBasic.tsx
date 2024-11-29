import classNames from 'classnames'
import { BasicTable, BasicTableWrapper } from './styles'
import React, { Fragment } from 'react'
import BuildIcon from '@mui/icons-material/Build'
import { ButtonBase } from '@mui/material'
import { getProp, isArrayEmpty } from '../../../utils/index'
import { TableBasicProps } from './types'
import useBasicTable from './useBasicTable'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import BasicTableElement from './BasicTableElement/BasicTableElement'
import WarningIcon from '@mui/icons-material/Warning'

const TableBasic: React.FC<TableBasicProps> = React.forwardRef(function Element(
  {
    id,
    children,
    thead = [],
    data = [],
    className,
    onChange,
    defaultValue = '?',
    showWatchButton,
    showEditButton,
    showDeleteButton,
    confirmationMessage = '¿Desea eliminar este item?',
    emptyTableMessage = 'No hay registros para mostrar',
    maxHeight,
    showIndex,
  },
  ref
) {
  const {
    tableData,
    theadComputed,
    showActions,
    handleOnChange,
    handleOnDeleteItem,
  } = useBasicTable({
    thead,
    data,
    showWatchButton,
    showEditButton,
    showDeleteButton,
    confirmationMessage,
    emptyTableMessage,
    onChange,
  })

  return (
    <BasicTableWrapper sx={{ maxHeight }}>
      <BasicTable id={id} className={classNames(className)} ref={ref as any}>
        {!isArrayEmpty(theadComputed) && (
          <thead>
            <tr>
              {showIndex && <th className="index-column">#</th>}
              {theadComputed.map((item, index) => (
                <th className={item.className} key={index}>
                  {item.label as any}
                </th>
              ))}
              {showActions && (
                <th className="actions">
                  <BuildIcon className="icon" />
                </th>
              )}
            </tr>
          </thead>
        )}

        {!children && (
          <tbody>
            {tableData &&
              !isArrayEmpty(tableData) &&
              tableData.map((item: any, index: number) => (
                <Fragment key={item.id}>
                  <tr>
                    {showIndex && <td className="index-column">{index + 1}</td>}

                    {theadComputed.map((thItem, thIndex) => (
                      <td key={thIndex}>
                        {!thItem.type &&
                          thItem.keyName &&
                          getProp(item, thItem.keyName, defaultValue)}

                        {thItem.type && thItem.keyName && (
                          <BasicTableElement
                            type={thItem.type}
                            name={thItem.keyName}
                            onChange={handleOnChange(index)}
                            value={getProp(item, thItem.keyName)}
                          />
                        )}
                      </td>
                    ))}

                    {showActions && (
                      <td className="actions flex center">
                        {showDeleteButton && (
                          <ButtonBase
                            className="btn-action"
                            title="Eliminar"
                            onClick={handleOnDeleteItem(index)}
                          >
                            <DeleteForeverIcon className="icon" />
                          </ButtonBase>
                        )}
                      </td>
                    )}
                  </tr>
                </Fragment>
              ))}

            {isArrayEmpty(tableData) && (
              <tr>
                <td
                  colSpan={theadComputed.length}
                  className="flex row v-center"
                >
                  <WarningIcon className="icon icon-margin" />{' '}
                  {emptyTableMessage}
                </td>
              </tr>
            )}
          </tbody>
        )}

        {children as any}
      </BasicTable>
    </BasicTableWrapper>
  )
})

export default TableBasic
