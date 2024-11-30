import { ChildrenElement } from '@/modules/builder/interfaces/general'
import { BASIC_TABLE_ELEMENTS } from '@/modules/core/components/shared/BasicTable/BasicTableElement/basic-table-elements'

export interface TheadItem {
  label?: ChildrenElement
  type?: BASIC_TABLE_ELEMENTS
  keyName?: string
  className?: string
}

export interface TableBasicProps {
  ref?: any
  id?: string
  className?: string
  thead?: Array<TheadItem>
  data?: Array<any>
  children?: ChildrenElement
  onChange?: any
  defaultValue?: ChildrenElement
  readOnly?: boolean
  visibleInputs?: boolean
  showWatchButton?: boolean
  showEditButton?: boolean
  showDeleteButton?: boolean
  confirmationMessage?: string
  emptyTableMessage?: string
  maxHeight?: string | number
  showIndex?: boolean
}
