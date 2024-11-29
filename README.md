# @korautils/forms (🚧 Alpha)

**@korautils/forms** is a library designed to provide an efficient and versatile solution for creating dynamic forms with advanced design patterns. It implements patterns such as Builder, Observer, and Factory, allowing you to centralize component logic, simplify integration, and maximize reusability in projects that require an agile and adaptable approach.

With **@korautils/forms**, you can generate complex forms intuitively, maintain clean and organized code, and quickly adapt them to your project's changing needs. The library includes tools to manage the state of child components created with ElementBuilder, as well as to configure and apply validations flexibly.

Additionally, **@korautils/forms** makes it easy to integrate with APIs, allowing you to define configurations such as the URL, HTTP method, and other necessary parameters. You only need to add the required fields, and this tool will handle sending the data to the specified API, optimizing your development flow.

### **Alpha Version Notice**

⚠️ **This library is in alpha phase.** It is currently in a testing stage, which means that:

- The published version is **not stable** and may contain bugs.
- There may be **significant changes** to its API, functionality, or structure in future updates.
- While you can download and test it, it is **not recommended for production applications.**

If you decide to try this version, we would greatly appreciate your feedback, suggestions, or bug reports in the [Issues](https://github.com/korautils/forms) section. Your feedback helps us improve!

---

### **About the Project**

This project is in its early stages 🚀. I have gathered some components that I commonly use in all my projects to simplify the creation of dynamic forms. As mentioned at the beginning of the README, this is **just the beginning**. I'm working on this in my free time, so **please be patient** as I continue improving the library.

Constructive criticism is always welcome, and if you're interested in collaborating, **you are very welcome**. I am open to receiving all the help I can get, whether it's ideas, bug fixes, or improvements.

---

### **How to Contribute**

If you're interested in contributing to the development of **@korautils/forms**, it would be awesome to have your help! You can contribute in the following ways:

1. **Open Issues**: If you find a bug or have a suggestion, feel free to open an [issue](https://github.com/korautils/forms/issues) in the repository. Your report will help improve the library.
2. **Make a Pull Request**: If you’ve made improvements or fixed bugs, you can create a **pull request**. Please make sure to test your changes before submitting them.
3. **Documentation Improvements**: If you have suggestions for improving the documentation or have found areas that need clarification, your contributions in this area are very valuable.
4. **Testing and Feedback**: Since we're in the alpha phase, your testing and feedback on the library's behavior are important to ensure its quality and stability in future versions.

### **Instructions for Contributing**

If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and make sure nothing breaks.
4. Submit a **pull request** with a clear description of the changes.

---

Thanks for considering contributing to **@korautils/forms**! Your collaboration is key to making this library even better.

## Installation

To install this alpha version, run:

```bash
$ npm install @korautils/forms
```

# Implementation
```ts
import './App.css'
import { Fragment } from 'react/jsx-runtime'
import { FormBuilder, ElementBuilder, FormHandlerProps } from '@korautils/forms'

function App() {
  return (
    <Fragment>
      <h2>Test FormBuilder</h2>

      <div
        style={{
          width: '100%',
          display: 'block',
          backgroundColor: '#f4f4f4',
          padding: '20px',
        }}
      >
        {
          // Instantiates a new form...
          FormBuilder.newForm()
            // Sets the grid columns
            .setCols(3)
            // Configures the endpoint for HTTP requests
            .setApi({
              method: 'POST',
              url: 'https://localhost:8000',
            })
            // Adds a text field for entering the full name
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
            // Adds a text field for entering the username
            .addItem(
              ElementBuilder.newElement().textField({
                name: 'username',
                label: 'Username',
              })
            )
            // Adds a text field for entering an email with format validation
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
            // Adds a select field with predefined static options
            .addItem(
              ElementBuilder.newElement().select({
                name: 'select',
                label: 'Static options',
                options: [
                  { label: 'Static Option 1', value: 'option1' },
                  { label: 'Static Option 2', value: 'option2' },
                ],
              })
            )
            // Adds a dynamic select field that fetches its options from an API
            .addItem(
              ElementBuilder.newElement().select({
                name: 'select',
                label: 'Dynamic options',
                api: {
                  method: 'GET',
                  url: 'https://jsonplaceholder.typicode.com/todos/',
                  responseType: 'json',
                },
                renderProps: { label: '[0].title', value: '[0].id' },
              })
            )
            // Adds a button
            .addItem(
              ElementBuilder.newElement().button({
                type: 'submit',
                name: 'button',
                label: 'Send',
              })
            )
            // Adds a custom component
            .addItem(
              ElementBuilder.newElement()
                .setFullWidth()
                .box({
                  children: <CustomComponent />,
                })
            )
            .build()
        }
      </div>
    </Fragment>
  )
}

// The custom component receives an optional formHandler
// to manage and synchronize the global form state.
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
        color: '#333',
      }}
    >
      {fullname && <span>Hi, {fullname}!</span>}
      <hr style={{ width: '100%' }} />
      <span>Done with love ♥️</span>
    </div>
  )
}

export default App
```
