import { Control, FieldValues } from 'react-hook-form'

interface Props {
  name: string
  rules?: any
  shouldUnregister?: boolean
  defaultValue?: any
  control?: Control<FieldValues, any>
  render: ({ field }: any) => any
  disabled?: boolean
}

const EmptyController: React.FC<Props> = ({ render }) => {
  return <>{render({ field: {} })}</>
}

export default EmptyController
