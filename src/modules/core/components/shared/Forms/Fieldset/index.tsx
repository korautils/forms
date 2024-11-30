import React, { FieldsetHTMLAttributes } from 'react'
import { FieldsetWrapper } from '@/modules/core/components/shared/Forms/Fieldset/styles'
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
