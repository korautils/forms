import { ButtonProps as MuiButtonProps } from '@mui/material'

export type variantOptions = 'text' | 'outlined' | 'contained' | undefined

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  label?: string
  variant?: 'text' | 'outlined' | 'contained'/* | 'black-camera'*/
  icon?: React.ReactElement
  circular?: boolean
  unshadow?: boolean
  tooltipTitle?: string
}
