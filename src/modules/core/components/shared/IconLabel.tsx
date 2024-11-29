import React from 'react'
import classNames from 'classnames'
import { pascalCaseToSnakeCase } from '@/modules/core/utils'
import { Icon } from '@mui/material'

interface Props {
  icon?: React.ReactElement | string
  label?: any
  className?: string
}

const IconLabel: React.FC<Props> = ({ label, icon, className }) => {
  return (
    <label className={classNames('flex row v-center', className)}>
      {typeof icon === 'string' && (
        <Icon className="icon-margin">{pascalCaseToSnakeCase(icon)}</Icon>
      )}
      {React.isValidElement(icon) &&
        React.cloneElement(icon as any, {
          className: 'icon-margin',
        })}
      {label}
    </label>
  )
}

export default IconLabel
