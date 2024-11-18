import { styled } from '@mui/material'

export const FieldsetWrapper:any  = styled('fieldset')`
  display: block;
  width: 100%;
  border: none;
  padding: 0;

  &.disabled,
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`
