import { styled } from '@mui/material'
import Button from '@mui/material/Button'

export const ButtonWrapper: any = styled(Button)`
  text-transform: none;

  &.unshadow {
    box-shadow: unset !important;
  }

  &.black {
    background-color: #000000;
    color: #ffffff;
  }

  &.circular {
    border-radius: 30px;
  }

  &.button-large {
    padding: 15px 24px;
  }

  &.button-medium {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`
