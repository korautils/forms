import React from 'react'
import classNames from 'classnames'

// import CameraAltIcon from '@mui/icons-material/CameraAlt'
import Tooltip from '@/modules/core/components/shared/Tooltip'
import { ButtonWrapper } from '@/modules/core/components/shared/Button/styles'
import { ButtonProps, variantOptions } from '@/modules/core/components/shared/Button/types'

const parseVariantOption = (value: string): variantOptions => {
  switch (value) {
    case 'text':
    case 'outlined':
    case 'contained':
      return value
    // case 'black-camera':
    //   return 'contained'
    default:
      return 'contained'
  }
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  color,
  icon,
  variant,
  circular,
  unshadow,
  className,
  tooltipTitle,
  children,
  size = 'small',
  ...props
}) => {
  const adjustedVariant = parseVariantOption(variant as string)

  const renderButton = () => {
    return (
      <ButtonWrapper
        className={classNames(className, `button-${size}`, {
          // black: variant === 'black-camera',
          unshadow,
          circular,
        })}
        variant={adjustedVariant}
        color={color}
        {...props}
        size={size}
      >
        {/* {variant === 'black-camera' && (
          <CameraAltIcon
            className={classNames({ 'mr-1': label || children })}
          />
        )} */}

        {icon &&
          React.cloneElement(icon as any, {
            className: 'icon-margin',
          })}

        {label && <span>{label}</span>}
        {!label && children}
      </ButtonWrapper>
    )
  }

  return (
    <>
      {tooltipTitle && <Tooltip title={tooltipTitle}>{renderButton()}</Tooltip>}
      {!tooltipTitle && renderButton()}
    </>
  )
}

export default ButtonComponent
