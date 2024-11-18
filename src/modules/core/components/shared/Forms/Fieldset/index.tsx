import React, { FieldsetHTMLAttributes } from 'react'
import { FieldsetWrapper } from './styles'
import classNames from 'classnames'

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children?: React.ReactElement | React.ReactElement[]
}

const Fieldset: React.FC<Props> = ({
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <FieldsetWrapper className={classNames(className, { disabled })} {...props}>
      {children}
    </FieldsetWrapper>
  )
}

export default Fieldset
