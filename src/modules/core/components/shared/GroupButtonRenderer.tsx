import { ButtonGroup } from '@mui/material'
import { ItemOptionProps } from '@/modules/builder/interfaces/elements/components'
import { isArrayEmpty } from '@/modules/core/utils'
import ButtonComponent from '@/modules/core/components/shared/Button'

interface Props {
  options?: Array<ItemOptionProps>
}

const GroupButtonRenderer: React.FC<Props> = ({ options = [] }) => {
  return (
    <ButtonGroup>
      {!isArrayEmpty(options) &&
        options.map((item, index) => (
          <ButtonComponent variant={item.variant} key={index}>
            {item.label as any}
          </ButtonComponent>
        ))}
    </ButtonGroup>
  )
}

export default GroupButtonRenderer
