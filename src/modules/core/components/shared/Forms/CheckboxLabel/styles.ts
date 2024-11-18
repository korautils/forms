import { styled } from '@mui/material'

export const CheckboxWrapper:any  = styled('label')`
  display: flex;
  flex-direction: column;
  margin-left: -11px;
  cursor: pointer;

  .fieldContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &.error {
    &,
    .MuiFormHelperText-root,
    .MuiCheckbox-root {
      color: ${({ theme }) => theme.palette.error.main};
    }
  }

  .MuiFormHelperText-root {
    margin-left: 40px;
    margin-top: -10px;
  }
`
