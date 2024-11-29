import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import { getProp, uuidv4 } from '@/modules/core/utils'

const useTabsInternalState = ({
  tabName,
  tabId = uuidv4(),
  defaultValue,
  formHandler = {},
}: {
  tabName: string
  tabId: string
  defaultValue?: any
  formHandler?: FormHandlerProps
}) => {
  const { watch, setValue } = formHandler
  const state = watch ? watch(tabName) : {}

  const setTabState = (value: any) => {
    let newState = value
    if (typeof value === 'function') {
      let oldValue = getProp(state, tabId)
      if (oldValue === undefined) {
        oldValue = defaultValue
      }
      newState = value(oldValue)
    }

    setValue && setValue(tabName, { ...state, [tabId]: newState })
  }

  return [getProp(state, tabId, defaultValue), setTabState]
}

export default useTabsInternalState
