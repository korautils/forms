import { getProp, isArrayEmpty } from '@/modules/core/utils'
import { ElementRule } from '@/modules/builder/interfaces/elements/types'

interface RuleReturnProps {
  visible: boolean
  disabled?: boolean
}

class RuleManager {
  state: any

  constructor(state: any) {
    this.state = state
  }

  validateRule(rule: ElementRule): boolean {
    if ('fieldName' in rule && 'operator' in rule && 'value' in rule) {
      const fieldValue = getProp(this.state, rule.fieldName)
      const comparedValue = rule.value
      const operator = rule.operator

      switch (operator) {
        case '==':
          return fieldValue == comparedValue
        case '!=':
          return fieldValue != comparedValue
        case '>':
          return fieldValue > comparedValue
        case '>=':
          return fieldValue >= comparedValue
        case '<':
          return fieldValue < comparedValue
        case '<=':
          return fieldValue <= comparedValue
        default:
          throw new Error(`Operador no soportado: ${operator}`)
      }
    }

    return true
  }

  processRules(rules: Array<Array<ElementRule>> = []): RuleReturnProps {
    let overallVisibility = true
    let disabled: any

    if (isArrayEmpty(rules)) return { visible: overallVisibility }

    for (const group of rules) {
      let groupValid = true
      let groupVisibility: boolean | undefined
      let groupAction: any
      let internalDisabled: any

      for (const rule of group) {
        groupValid = groupValid && this.validateRule(rule)

        if ('visible' in rule) {
          groupVisibility = rule.visible
        }

        if ('action' in rule && typeof rule.action === 'function') {
          groupAction = rule.action
        }

        if ('disabled' in rule) {
          internalDisabled = rule.disabled
        }
      }

      if (groupValid) {
        if (groupVisibility !== undefined) {
          overallVisibility = groupVisibility
        }
        if (groupAction) {
          groupAction()
        }

        if (internalDisabled !== undefined) {
          disabled = internalDisabled
        }
      } else if (groupVisibility !== undefined) {
        overallVisibility = false
      }
    }

    return { visible: overallVisibility, disabled }
  }
}

export default RuleManager
