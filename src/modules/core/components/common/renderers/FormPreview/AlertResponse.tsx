import React, { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { getProp } from '@/modules/core/utils'
import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'

interface Props {
  form?: FormBuilder
  loading?: boolean
  error?: any
  response?: any
  successMessage?: string
  errorMessage?: string
}

const AlertResponse: React.FC<Props> = ({
  form,
  loading,
  error,
  response,
  successMessage,
  errorMessage,
}) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (error || response) {
      setOpen(true)
    }
  }, [error, response])

  const getCustomApiResponse = (): string | undefined => {
    const apiConfig = form?.getApi()
    if (apiConfig) {
      const statusCode = getProp(response, 'status')
      const customMessage = getProp(
        apiConfig.statusMessages,
        `${statusCode}`,
        getProp(apiConfig.statusMessages, 'DEFAULT')
      )
      return customMessage
    }
  }

  // Determina el tipo de alerta y el título basado en el estado
  const getAlertProps = () => {
    if (!loading && errorMessage) {
      return {
        severity: 'error',
        title: 'Error',
        message: errorMessage,
      }
    }

    if (!loading && !error && successMessage) {
      return {
        severity: 'success',
        title: 'Correcto',
        message: successMessage,
      }
    }

    if (error) {
      return {
        severity: 'error',
        title: 'Error',
        message:
          getCustomApiResponse() ||
          getProp(error, 'response.data.message') ||
          getProp(response, 'data.message', error.message),
      }
    } else if (response && [200, 201].includes(response.status)) {
      return {
        severity: 'success',
        title: 'Correcto',
        message: getCustomApiResponse() || 'La operación fue exitosa',
      }
    }

    return {
      severity: 'info',
      title: loading ? 'Enviando...' : 'Información',
      message: loading
        ? 'Espera estamos haciendo algo'
        : getCustomApiResponse() || getProp(response, 'statusText'),
    }
  }

  const { severity, title, message } = getAlertProps()

  return (
    <>
      {open && (
        <Alert
          severity={severity as any}
          className="mb-1"
          action={
            loading ? undefined : (
              <IconButton
                aria-label="close"
                color="inherit"
                onClick={handleClose}
                size="small"
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            )
          }
        >
          <AlertTitle>{title}</AlertTitle>
          {Array.isArray(message)
            ? message.map((item, index) => <li key={index}>{item}</li>)
            : message}
        </Alert>
      )}
    </>
  )
}

export default AlertResponse