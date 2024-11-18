import React from 'react'
import { Props } from './types'
import ElementFactory from '@/modules/builder/classes/factories/ElementFactory'

const ElementBuilderRenderer: React.FC<Props> = ({
  element,
  props,
  origin,
}) => {
  return ElementFactory.createComponent(element, props).build({ origin })
}

export default ElementBuilderRenderer
