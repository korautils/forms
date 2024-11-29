# KoraForms (🚧 Alpha)

@korautils/forms es una librería diseñada para ofrecer una solución eficiente y versátil en la creación de formularios dinámicos con patrones de diseño avanzados. Implementa patrones como Builder, Observer y Factory, lo que permite centralizar la lógica de los componentes, simplificar la integración y maximizar la reutilización en proyectos que requieren un enfoque ágil y adaptable.

Con @korautils/forms, puedes generar formularios complejos de manera intuitiva, mantener un código limpio y organizado, y ajustarlos rápidamente a las necesidades cambiantes de tu proyecto. La librería incluye herramientas para gestionar el estado de los componentes hijos creados con ElementBuilder, así como para configurar y aplicar validaciones de manera flexible.

Además, @korautils/forms facilita la integración con APIs, permitiéndote definir configuraciones como la URL, el método HTTP y otros parámetros necesarios. Solo necesitas agregar los campos requeridos y esta herramienta se encargará de enviar los datos a la API especificada, optimizando tu flujo de desarrollo.

### **Nota sobre la versión alpha**

⚠️ **Esta librería está en fase alpha.** Actualmente se encuentra en una etapa de pruebas, lo que significa que:

- La versión publicada **no es estable** y puede contener errores.
- Puede experimentar **cambios significativos** en su API, funcionalidades o estructura en futuras actualizaciones.
- Aunque puedes descargarla y probar su funcionamiento, **no se recomienda para aplicaciones en producción.**

Si decides probar esta versión, agradeceremos mucho tus comentarios, sugerencias o reportes de errores en la sección de [Issues](https://github.com/korautils/forms). ¡Tu feedback nos ayuda a mejorar!

---

### **Acerca del Proyecto**

Este proyecto está en sus primeras etapas 🚀. He recopilado algunos componentes que uso generalmente en todos mis proyectos para facilitar la creación de formularios dinámicos. Tal como se indicó al principio en el README, esto **es solo el comienzo**. Estoy trabajando en esto en mis tiempos libres, por lo que **les pido paciencia** mientras sigo mejorando la librería.

Las críticas constructivas son siempre bienvenidas, y si estás interesado en colaborar, **serás muy bienvenido**. Estoy abierto a recibir toda la ayuda posible, ya sea con ideas, correcciones o mejoras.

---

### **Cómo colaborar**

Si estás interesado en contribuir al desarrollo de **@korautils/forms**, ¡sería genial tener tu ayuda! Puedes colaborar de las siguientes maneras:

1. **Abrir Issues**: Si encuentras un error o tienes alguna sugerencia, no dudes en abrir un [issue](https://github.com/korautils/forms/issues) en el repositorio. Tu reporte ayudará a mejorar la librería.
2. **Hacer un Pull Request**: Si has realizado mejoras o correcciones de errores, puedes crear un **pull request**. Por favor, asegúrate de probar tus cambios antes de enviarlos.
3. **Mejoras en la documentación**: Si tienes sugerencias para mejorar la documentación, o has encontrado áreas que necesitan aclaración, tus contribuciones en este sentido son muy valiosas.
4. **Testing y Feedback**: Como estamos en fase alpha, tus pruebas y comentarios sobre el comportamiento de la librería son muy importantes para garantizar su calidad y estabilidad en futuras versiones.

### **Instrucciones para contribuir**

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama para tu feature o fix.
3. Realiza tus cambios y asegúrate de que no rompan nada.
4. Envía un **pull request** con una descripción clara de los cambios realizados.

---

¡Gracias por considerar contribuir a **@korautils/forms**! Tu colaboración es clave para hacer que esta librería sea aún mejor.

## Instalación

Para instalar esta versión alpha, ejecuta:

```bash
npm install @korautils/forms
```

# Implementación

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
              })
            )
            // Agrega un campo de texto para ingresar un correo electrónico con validación de formato
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
            // Agrega un selector con opciones predefinidas de forma estática
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
            // Agrega un selector dinámico que obtiene sus opciones desde una API
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
            //Agrega un botón
            .addItem(
              ElementBuilder.newElement().button({
                type: 'submit',
                name: 'button',
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
      </div>
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
