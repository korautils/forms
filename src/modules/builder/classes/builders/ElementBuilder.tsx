import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { SxProps, Theme } from '@mui/material'
import { YupRule, YupSchema } from './yup-builder/types'
import GroupButtonRenderer from '../../components/shared/GroupButtonRenderer'
import TabsRenderer from '../../components/shared/TabsRenderer'
import YupBuilder from './yup-builder'

import {
  Autocomplete,
  Checkbox,
  EmailPreview,
  InputPassword,
  InputPrice,
  LazyBasicDateField,
  LazyBasicDatePicker,
  LazyBasicTimeField,
  LazyBasicTimeRangeField,
  LazyDatePickerModal,
  LazyRangePicker,
  LazyTimePicker,
  LazyTimePickerModal,
  RadioGroupPreview,
  TextField,
} from '../../lazy/elements'

import {
  BasicSelectProps,
  BoxProps,
  EmailProps,
  extractValidProps,
  InputProps,
  PasswordProps,
  SelectProps,
  TabsProps,
} from './element-props'
import ElementRenderer from './ElementRenderer'
import BoxElement from '../../components/shared/BoxElement'
import {
  BuildProps,
  ElementProps,
  ElementRule,
  OriginElement,
} from '../../interfaces/elements/types'
import { ELEMENT_TYPE } from '../../interfaces/elements/components'
// import ButtonComponent from '../../../../components/shared/Button'
import { getProp, isArrayEmpty } from '../../../core/utils'
// import { getProp } from '../../../../utils'
import ButtonComponent, {
  ButtonProps,
} from '../../../core/components/shared/Button/ButtonComponent'
import Select from '../../../core/components/shared/Select'
import Stepper from '../../components/shared/Stepper'
import FormBuilder from './FormBuilder'

type KeyProp = keyof ElementProps
type VISIBILITY = 'VISIBLE' | 'GONE' | 'INVISIBLE'

class ElementBuilder {
  public id: string
  public name?: string
  private gridColumn?: number
  private gridRow?: number
  private visibility: VISIBILITY = 'VISIBLE'
  private component: any
  private fullWidth?: boolean
  private elementType: ELEMENT_TYPE = 'INPUT'
  private _withControl?: boolean = true
  private props: ElementProps
  private rules: Array<Array<ElementRule>> = []
  public yupRules: Array<YupSchema | undefined> = [] //Validations
  protected formBuilderInstance?: FormBuilder

  constructor(props: ElementProps = {}) {
    this.id = uuidv4()
    this.component = null
    this.props = this.getBasicProps(props)
  }

  static newElement() {
    return new ElementBuilder()
  }

  withControl() {
    this._withControl = true
    return this
  }

  setFormBuilder(formBuilder: FormBuilder) {
    this.formBuilderInstance = formBuilder
    return this
  }

  newElement() {
    return this.formBuilderInstance!.newElement()
  }

  endElement() {
    return this.formBuilderInstance!
  }

  hasControl() {
    return this._withControl
  }

  getGridColumn() {
    return this.gridColumn
  }

  getGridRow() {
    return this.gridRow
  }

  setGridColumn(gridColumn: number) {
    this.gridColumn = gridColumn
    return this
  }

  setGridRow(gridRow: number) {
    this.gridRow = gridRow
    return this
  }

  getRules() {
    return this.rules
  }

  private instance(
    component: any,
    type: ELEMENT_TYPE,
    props: ElementProps = {}
  ) {
    this.component = component
    this.elementType = type
    this.props = { ...this.props, ...props }
    return this
  }

  private getBasicProps(props: ElementProps): ElementProps {
    return {
      id: this.id,
      size: 'small',
      ...props,
    }
  }

  setStyles(styles: React.CSSProperties) {
    this.props.style = styles
    return this
  }

  setVisibility(visibility: VISIBILITY) {
    this.visibility = visibility
    return this
  }

  getVisibility() {
    return this.visibility
  }

  setFullWidth() {
    this.fullWidth = true
    return this
  }

  getColumns() {
    return this.gridColumn
  }

  getRows() {
    return this.gridRow
  }

  setColumns(columns: number) {
    this.gridColumn = columns
    return this
  }

  setRows(rows: number) {
    this.gridRow = rows
  }

  textField(props: InputProps = {}) {
    return this.instance(TextField, 'INPUT', props)
  }

  email(props: EmailProps = {}) {
    return this.instance(EmailPreview, 'EMAIL', props)
  }

  autocomplete(props: SelectProps = {}) {
    return this.instance(Autocomplete, 'SELECT', props)
  }

  selectBasic(props: BasicSelectProps = {}) {
    return this.instance(Select, 'BASIC_SELECT', props)
  }

  groupButton(props: ElementProps = {}) {
    return this.instance(GroupButtonRenderer, 'GROUP_BUTTON', props)
  }

  password(props: PasswordProps = {}) {
    return this.instance(InputPassword, 'PASSWORD', props)
  }

  inputPrice(props: ElementProps = {}) {
    return this.instance(InputPrice, 'PRICE', props)
  }

  select(props: ElementProps = {}) {
    return this.autocomplete(props)
  }

  checkbox(props: ElementProps = {}) {
    return this.instance(Checkbox, 'CHECKBOX', props)
  }

  radioGroup(props: ElementProps = {}) {
    return this.instance(RadioGroupPreview, 'RADIO_GROUP', props)
  }

  dateField(props: ElementProps = {}) {
    return this.instance(LazyBasicDateField, 'DATE_FIELD', props)
  }

  timeField(props: ElementProps = {}) {
    return this.instance(LazyBasicTimeField, 'TIME_FIELD', props)
  }

  timeRangeField(props: ElementProps = {}) {
    return this.instance(LazyBasicTimeRangeField, 'TIME_RANGE_FIELD', props)
  }

  timeDesktop(props: ElementProps = {}) {
    return this.instance(LazyTimePicker, 'TIME_DESKTOP', props)
  }

  timeMobile(props: ElementProps = {}) {
    return this.instance(LazyTimePickerModal, 'TIME_MOBILE', props)
  }

  datePicker(props: ElementProps = {}) {
    return this.instance(LazyBasicDatePicker, 'DATE_PICKER', props)
  }

  datePickerModal(props: ElementProps = {}) {
    return this.instance(LazyDatePickerModal, 'DATE_PICKER_MODAL', props)
  }

  rangePicker(props: ElementProps = {}) {
    return this.instance(LazyRangePicker, 'RANGE_PICKER', props)
  }

  tabs(props: TabsProps = {}) {
    return this.instance(TabsRenderer, 'TABS', props)
  }

  stepper(props: ElementProps = {}) {
    return this.instance(Stepper, 'STEPPER', props)
  }

  box(props: BoxProps = {}) {
    this.props.style = { ...this.props.style, ...props, ...{ width: '100%' } }
    this._withControl = false
    return this.instance(BoxElement, 'BOX', props)
  }

  button(props: ButtonProps) {
    this._withControl = false
    return this.instance(ButtonComponent, 'BUTTON', props as any)
  }

  getType(): ELEMENT_TYPE {
    return this.elementType
  }

  getName(): string {
    return this.props?.name || this.id
  }

  getProps(): ElementProps {
    return this.props
  }

  getProp(key: KeyProp) {
    return getProp(this.props, key)
  }

  withProps(props: ElementProps = {}) {
    this.props = { ...this.props, ...props }
    return this
  }

  private checkOptions(origin: OriginElement) {
    const isSelect =
      this.elementType === 'BASIC_SELECT' || this.elementType === 'SELECT'

    if (isSelect && origin === 'DEMO' && isArrayEmpty(this.props.options)) {
      this.props.options = [
        { label: 'Opción 1', value: '1' },
        { label: 'Opción 2', value: '2' },
      ]
    } else if (
      isSelect &&
      origin === 'DEFAULT' &&
      isArrayEmpty(this.props.options)
    ) {
      this.props.options = []
    }
  }

  getClassNames(): Array<string> {
    let classNames: Array<string> = []

    if (this.fullWidth === true) {
      classNames.push('full-width')
    }

    return classNames
  }

  getStyles(): SxProps<Theme> {
    let styles: SxProps<Theme> = {}
    if (this.gridColumn) {
      styles = {
        ...styles,
        gridColumn: `span ${this.gridColumn} / span ${this.gridColumn}`,
      }
    }
    if (this.gridRow) {
      styles = {
        ...styles,
        gridRow: `span ${this.gridRow} / span ${this.gridRow}`,
      }
    }

    return styles
  }

  addRule(rule: ElementRule[]) {
    this.rules.push(rule)
    return this
  }

  addValidation(params: YupRule) {
    const yupRule = YupBuilder.createRule(params)

    if (yupRule) {
      this.yupRules.push(yupRule)
    }

    return this
  }

  addProps(props: ElementProps) {
    this.props = { ...this.props, ...props }
    return this
  }

  build({ field, origin = 'DEFAULT', formHandler }: BuildProps = {}) {
    const { component: Component, props } = this
    this.checkOptions(origin)

    const validProps = extractValidProps(this.elementType, {
      ...props,
      inputProps: props.maxLength
        ? {
            maxLength: props.maxLength,
          }
        : undefined,
      formHandler,
    })

    // console.log('VALID PROPS:', validProps)

    return (
      <>
        <ElementRenderer
          elementType={this.elementType}
          component={Component}
          {...validProps}
          {...field}
        />
      </>
    )
  }
}

export default ElementBuilder
