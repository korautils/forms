import '@/App.css'
import React from 'react'
import { Box, Divider, TextField } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { FormBuilder, ElementBuilder, FormHandlerProps } from '@/index'

function App() {
  return (
    <Fragment>
      <h2>
        Test FormBuilder{' '}
        <a href='https://github.com/korautils/forms' target='_blank'>
          @korautils/forms
        </a>
      </h2>

      <Box
        sx={{
          width: '100%',
          display: 'block',
          backgroundColor: '#f4f4f4',
          padding: 2,
        }}
      >
        {
          //Instancia un nuevo formulario...
          FormBuilder.newForm()
            //Configura las columnas de la grilla
            .setCols(3)
            // Configura el endpoint para realizar solicitudes HTTP
            .setApi({
              method: 'POST',
              url: 'https://localhost:8000',
            })
            //Agrega un campo de texto para ingresar el nombre completo
            .addItem(
              ElementBuilder.newElement()
                .textField({
                  name: 'fullname',
                  label: 'Full name',
                  size: 'medium',
                  color: 'secondary',
                })
                .addValidation({
                  type: 'string',
                  required: { value: true, message: 'Full name is required' },
                })
            )
            // Agrega un campo de texto para ingresar el nombre de usuario
            .addItem(
              ElementBuilder.newElement().textField({
                name: 'username',
                label: 'Username',
                size: 'medium',
              })
            )
            // Agrega un campo de texto para ingresar un correo electrónico con validación de formato
            .addItem(
              ElementBuilder.newElement()
                .textField({
                  name: 'email',
                  label: 'Email',
                  size: 'medium',
                })
                .addValidation({
                  type: 'string',
                  isEmail: { value: true },
                })
            )
            // Agrega un selector con opciones predefinidas de forma estática
            .addItem(
              ElementBuilder.newElement().select({
                name: 'select',
                label: 'Static options',
                size: 'medium',
                options: [
                  { label: 'Static Option 1', value: 'option1' },
                  { label: 'Static Option 2', value: 'option2' },
                ],
              })
            )
            // Agrega un selector dinámico que obtiene sus opciones desde una API
            .addItem(
              ElementBuilder.newElement().select({
                name: 'select',
                label: 'Dynamic options',
                size: 'medium',
                api: {
                  method: 'GET',
                  url: 'https://jsonplaceholder.typicode.com/todos/',
                  responseType: 'json',
                },
                renderProps: { label: '[0].title', value: '[0].id' },
              })
            )
            //Agrega un botón
            .addItem(
              ElementBuilder.newElement().button({
                type: 'submit',
                name: 'button',
                size: 'large',
                label: 'Send',
              })
            )
            //Agrega un componente personalizado
            .addItem(
              ElementBuilder.newElement()
                .setFullWidth()
                .box({
                  children: <CustomComponent />,
                })
            )
            .build()
        }
      </Box>
    </Fragment>
  )
}

// El componente personalizado recibe un formHandler opcional
// para gestionar y sincronizar el estado global del formulario.
const CustomComponent: React.FC<{ formHandler?: FormHandlerProps }> = ({
  formHandler = {},
}) => {
  const { watch } = formHandler

  const fullname = watch ? watch('fullname') : ''

  return (
    <div
      className='custom-content'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      {fullname && <span>Hi, {fullname}!</span>}
      <Divider />
      <span>Done with love ♥️</span>
    </div>
  )
}

export default App
