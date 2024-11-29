import './App.css'
import { Box } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'
import ElementBuilder from '@/modules/builder/classes/builders/ElementBuilder'

function App() {
  return (
    <Fragment>
      <h2>Test FormBuilder</h2>

      <Box
        sx={{
          width: '100%',
          display: 'block',
          backgroundColor: '#f4f4f4',
          padding: 2,
        }}
      >
        {FormBuilder.newForm()
          .setCols(3)
          .setApi({
            method: 'POST',
            url: 'https://localhost:8000',
          })
          .newElement()
          .textField({
            name: 'text',
            label: 'Username',
          })
          .endElement()
          .newElement()
          .textField({ name: 'other', label: 'Other' })
          .endElement()
          .addItem(
            ElementBuilder.newElement()
              .textField({
                name: 'fullname',
                label: 'Full name',
              })
              .addValidation({
                type: 'string',
                required: { value: true, message: 'Full name is required' },
              })
          )
          .addItem(
            ElementBuilder.newElement()
              .textField({
                name: 'email',
                label: 'Email',
              })
              .addValidation({
                type: 'string',
                isEmail: { value: true },
              })
          )
          .addItem(
            ElementBuilder.newElement().button({
              type: 'submit',
              name: 'button',
              label: 'Send',
            })
          )
          .build()}
      </Box>
    </Fragment>
  )
}

export default App
