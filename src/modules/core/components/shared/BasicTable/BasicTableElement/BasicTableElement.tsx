import { BASIC_TABLE_ELEMENTS, basicElements } from '@/modules/core/components/shared/BasicTable/BasicTableElement/basic-table-elements'

interface Props {
  type: BASIC_TABLE_ELEMENTS
  name?: string
  value?: string
  onChange?: any
}

const BasicTableElement: React.FC<Props> = ({
  type,
  name,
  value,
  onChange,
}) => {
  const Element = basicElements[type]
  const formattedValue = typeof value === 'object' ? JSON.stringify(value) : value;
  return <Element type={type} name={name} value={formattedValue} onChange={onChange} />
}

export default BasicTableElement
