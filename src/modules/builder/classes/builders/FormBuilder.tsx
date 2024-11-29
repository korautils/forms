/*
 * Sería interesante agregar el hidden y que los valores por props funcionen
 * correctamente y se conecten con el estado.
 */

import YupBuilder from '@/modules/builder/classes/builders/yup-builder'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import { ApiRequestConfig } from '@/modules/builder/interfaces/general'
import { isArrayEmpty } from '@/modules/core/utils'
import ElementBuilder from './ElementBuilder'
import FormRenderer from '@/modules/core/components/common/renderers/FormPreview/FormRenderer'
import FormPreview from '@/modules/core/components/common/renderers/FormPreview'

const MIN_COL_WIDTH = 300

type FormHandlerType = FormHandlerProps | (() => FormHandlerType) | undefined

class FormBuilder {
  private id?: string
  private title: string = 'Untitled'
  private cols?: number
  private gridGap?: number | string
  private colWidth?: number = MIN_COL_WIDTH
  private items: Array<ElementBuilder> = []
  private api?: ApiRequestConfig
  private schema = YupBuilder.newInstance()
  private initialData?: any
  private handleOnChange?: any
  public formHandler?: FormHandlerType
  public ssr?: boolean = true
  public showControls?: boolean = false
  public static baseUrl?: string
  private currentElement?: ElementBuilder

  constructor(initialData?: any) {
    this.initialData = initialData
  }

  /** Queda pendiente sincronizar el initial data de los subformuarios con el del formulario principal */
  static newForm(initialData?: any) {
    return new FormBuilder(initialData)
  }

  getApi() {
    return this.api
  }

  setApi<D = any>(config: ApiRequestConfig<D>) {
    this.api = config
    return this
  }

  setFormHandler(formHandler: FormHandlerType) {
    this.formHandler = formHandler
    return this
  }

  getInitialData() {
    return this.initialData
  }

  setInitialData(data: any) {
    this.initialData = data
    return this
  }

  getFormHandler(): FormHandlerType {
    return this.formHandler
  }

  setHandleOnChange(handle: any) {
    this.handleOnChange = handle
    return this
  }

  getHandleOnChange() {
    return this.handleOnChange
  }

  getId() {
    return this.id
  }

  getCols() {
    return this.cols
  }

  getColWidth() {
    return this.colWidth
  }

  setCols(cols: number) {
    this.cols = cols
    return this
  }

  setColWidth(colWidth: number) {
    this.colWidth = colWidth
    return this
  }

  addItem(item: ElementBuilder) {
    this.items.push(item)
    return this
  }

  getItems() {
    return this.items
  }

  newElement() {
    if (this.currentElement) {
      this.addItem(this.currentElement)
    }

    this.currentElement = ElementBuilder.newElement().setFormBuilder(this)
    return this.currentElement
  }

  private endElement() {
    if (!this.currentElement) {
      return
    }

    this.addItem(this.currentElement)
    this.currentElement = undefined
    return this
  }

  private buildSchema() {
    this.items.forEach((item) => {
      if (item.getType() === 'STEPPER') {
        //Procesamos los schemas hijos...
        const steps = item.getProp('steps')
        if (!isArrayEmpty(steps)) {
          //Procesamos los forms builder hijos...
          steps.forEach((step: any) => {
            if (step.body instanceof FormBuilder) {
              const stepForm = step.body as FormBuilder
              //Procesamos las validaciones...
              const items = stepForm.getItems()
              items.forEach((stepItem) => {
                this.processYupRules(stepItem)
              })

              //Renderizamos...
              step.body = stepForm.setFormHandler(this.getFormHandler).build()
            }
          })
        }
      } else {
        this.processYupRules(item)
      }
    })
  }

  private processYupRules(item: ElementBuilder) {
    if (item.yupRules !== undefined && item.getName() != undefined) {
      item.yupRules.forEach((yupRule) => {
        this.schema.pushRule(item.getName()!, yupRule!)
      })
    }
  }

  getSchema() {
    return this.schema
  }

  setGridGap(gap: number | string) {
    this.gridGap = gap
    return this
  }

  getGridGap() {
    return this.gridGap
  }

  setSsr(ssr: boolean) {
    this.ssr = ssr
    return this
  }

  build() {
    //Construimos el esquema de validación:
    this.buildSchema()

    const Component = this.formHandler ? FormRenderer : FormPreview

    return (
      <Component
        form={this}
        formHandler={
          typeof this.formHandler === 'function'
            ? (this.formHandler() as FormHandlerProps)
            : this.formHandler
        }
      />
    )
  }
}

export default FormBuilder
