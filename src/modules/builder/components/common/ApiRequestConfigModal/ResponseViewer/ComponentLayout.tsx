import Tooltip from '@/modules/core/components/shared/Tooltip'
import { pascalCaseToSnakeCase } from '@/modules/core/utils'
import { Icon } from '@mui/material'
import { ComponentLayoutWrapper } from './styles'
import { ChildrenElement } from '@/modules/builder/interfaces/general'

interface Props {
  label?: ChildrenElement
  propagate?: boolean
  tooltipIcon?: string
  tooltipInfo?: string
  children?: any
}

const ComponentLayout: React.FC<Props> = ({
  label,
  children,
  propagate,
  tooltipIcon,
  tooltipInfo,
}) => {
  return (
    <ComponentLayoutWrapper>
      <span className='label'>
        {(propagate || tooltipInfo) && (
          <Tooltip title={tooltipInfo || 'Afectará a todos los elementos'}>
            <Icon className='icon'>
              {pascalCaseToSnakeCase(tooltipIcon || 'Public')}
            </Icon>
          </Tooltip>
        )}
        {label as any}:
      </span>
      {children}
    </ComponentLayoutWrapper>
  )
}

export default ComponentLayout
