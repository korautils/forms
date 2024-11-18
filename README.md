# KoraForms (🚧 Alpha)
FormBuilder es una librería diseñada para ofrecer una solución eficiente y versátil en la creación de formularios dinámicos con patrones de diseño avanzados. Implementa patrones como Builder, Observer y Factory, lo que permite centralizar la lógica de los componentes, simplificar la integración y maximizar la reutilización en proyectos que requieren un enfoque ágil y adaptable.

Con FormBuilder, puedes generar formularios complejos de manera intuitiva, mantener un código limpio y organizado, y ajustarlos rápidamente a las necesidades cambiantes de tu proyecto. La librería incluye herramientas para gestionar el estado de los componentes hijos creados con ElementBuilder, así como para configurar y aplicar validaciones de manera flexible.

Además, FormBuilder facilita la integración con APIs, permitiéndote definir configuraciones como la URL, el método HTTP y otros parámetros necesarios. Solo necesitas agregar los campos requeridos y esta herramienta se encargará de enviar los datos a la API especificada, optimizando tu flujo de desarrollo.

### **Nota sobre la versión alpha**

⚠️ **Esta librería está en fase alpha.** Actualmente se encuentra en una etapa de pruebas, lo que significa que:
- La versión publicada **no es estable** y puede contener errores.
- Puede experimentar **cambios significativos** en su API, funcionalidades o estructura en futuras actualizaciones.
- Aunque puedes descargarla y probar su funcionamiento, **no se recomienda para aplicaciones en producción.**

Si decides probar esta versión, agradeceremos mucho tus comentarios, sugerencias o reportes de errores en la sección de [Issues](https://github.com/tu-usuario/tu-repositorio/issues). ¡Tu feedback nos ayuda a mejorar!

---

## Instalación

Para instalar esta versión alpha, ejecuta:

```bash
npm install @korautils/forms
```

# Implementación

```ts
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
```
