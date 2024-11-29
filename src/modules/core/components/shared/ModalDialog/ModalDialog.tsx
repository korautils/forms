import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
// import { any } from '@/modules/core/interfaces/general'
import ButtonComponent from '../Button'

const BootstrapDialog:any  = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

interface ActionButton {
  label?: any
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  action?: any
}

interface Props {
  open?: boolean
  handleClose?: any
  minWidth?: number
  title?: any
  children?: any
  actions?: Array<ActionButton>
  paddingBody?: number
  disableBackdropAction?: boolean
  showFooter?: boolean
  keepMounted?: boolean
}

const ModalDialog: React.FC<Props> = ({
  title,
  children,
  open = false,
  minWidth = 400,
  actions = [],
  handleClose,
  paddingBody,
  showFooter = true,
  keepMounted = false,
  disableBackdropAction = false,
}) => {
  return (
    <BootstrapDialog
      onClose={disableBackdropAction ? undefined : handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      keepMounted={keepMounted}
    >
      {title && (
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
      )}

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{ minWidth }}
        dividers
        style={{ padding: paddingBody }}
      >
        {children}
      </DialogContent>

      {showFooter && (
        <DialogActions>
          {actions.map((action, index) => (
            <ButtonComponent
              color={action.color || 'primary'}
              onClick={action.action}
              key={index}
            >
              {action.label}
            </ButtonComponent>
          ))}
          <Button autoFocus onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      )}
    </BootstrapDialog>
  )
}

export default ModalDialog
