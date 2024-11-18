import MonacoEditor, { useMonaco } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import React, { useEffect } from 'react'
import { uuidv4 } from '@/modules/core/utils'
// import { LANGUAGES_EDITOR } from '@/modules/core/interfaces/general'
import { LANGUAGES_EDITOR } from '@/modules/builder/interfaces/general'

interface Props {
  name?: string
  language: LANGUAGES_EDITOR
  value?: string
  height?: string | number
  options?: editor.IStandaloneEditorConstructionOptions
  onChange?: any
  suggestions?: any
}

const getFormatUnit = (language: LANGUAGES_EDITOR) => {
  switch (language) {
    case 'postgres':
      return 'postgresql'
    default:
      return language
  }
}

const CodeEditor: React.FC<Props> = ({
  name = uuidv4(),
  language,
  value,
  height,
  options = {},
  onChange,
}) => {
  const monaco = useMonaco()

  //Agregar formateador sql
  // useEffect(() => {
  //   if (monaco && ['sql', 'postgres'].includes(language)) {
  //     monaco.languages.registerDocumentFormattingEditProvider('sql', {
  //       provideDocumentFormattingEdits: (model, options, token) => {
  //         const formatted = format(model.getValue(), {
  //           language: getFormatUnit(language) as any, // Lenguaje para formatear
  //           indentStyle: 'standard',
  //           tabWidth: 4,
  //         })

  //         return [
  //           {
  //             range: model.getFullModelRange(),
  //             text: formatted,
  //           },
  //         ]
  //       },
  //     })
  //   }
  // }, [monaco, language])

  /**
   * El código siguiente es para definir las variables, fields y demás cosas para el editor, interesante para lo del editor SQL


  const provideCompletionItems = (model: any, position: any) => {
    if (!monaco) {
      return {
        suggestions: [],
      }
    }

    // Obtener el texto de la línea actual
    const textUntilPosition = model.getValueInRange({
      startLineNumber: position.lineNumber,
      startColumn: 1,
      endLineNumber: position.lineNumber,
      endColumn: position.column,
    })

    // Verificar si está escribiendo un SELECT para sugerir tablas
    if (/SELECT\s+\*\s+FROM\s+$/i.test(textUntilPosition)) {
      return {
        suggestions: [
          {
            label: 'users',
            kind: monaco.languages.CompletionItemKind.Class, // Tabla 'users'
            insertText: 'users',
            range: null,
          },
          {
            label: 'orders',
            kind: monaco.languages.CompletionItemKind.Class, // Tabla 'orders'
            insertText: 'orders',
            range: null,
          },
        ],
      }
    }

    // Si se está escribiendo algo después de 'users', ofrecer sugerencias de columnas
    console.log('LLEGA HASTA AQUI')
    if (/SELECT\s+\*\s+FROM\s+([a-zA-Z_][a-zA-Z0-9_]*)(?:\s*\.\s*)?$/i.test(textUntilPosition)) {
      return {
        suggestions: [
          {
            label: 'id',
            kind: monaco.languages.CompletionItemKind.Field, // Columna 'id'
            insertText: 'id',
            range: null,
          },
          {
            label: 'name',
            kind: monaco.languages.CompletionItemKind.Field, // Columna 'name'
            insertText: 'name',
            range: null,
          },
        ],
      }
    }

    return { suggestions: [] }
  }

  useEffect(() => {
    if (monaco) {
      monaco.languages.registerCompletionItemProvider(language, {
        provideCompletionItems: (model, position) => {
          const word = model.getWordUntilPosition(position)
          const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          }

          const { suggestions } = provideCompletionItems(model, position)

          const suggestionWithRange = suggestions.map((suggestion) => ({
            ...suggestion,
            range,
          }))

          return {
            suggestions: suggestionWithRange,
          }
        },
      })
    }
  }, [monaco])
  
  */

  // const editorRef = useRef<any>(null)

  // const separateProps = (options: any) => {
  //   const { readOnly, ...restOptions } = options || {}
  //   return { options: restOptions, readOnly }
  // }

  // useEffect(() => {
  //   if (monaco && value) {
  //     const model = monaco.editor.createModel(value, language)

  //     // Formatear el contenido
  //     const editorInstance = editorRef.current
  //     if (editorInstance) {
  //       editorInstance.setModel(model)

  //       editorInstance.getAction('editor.action.formatDocument').run()

  //       model.dispose() // Limpiar el modelo después de usarlo
  //     }
  //   }
  // }, [, monaco, value, language])

  return (
    <MonacoEditor
      height={height}
      language={language}
      value={value}
      options={{
        automaticLayout: true,
        tabSize: 2,
        insertSpaces: true,
        formatOnType: false,
        formatOnPaste: false,
        // readOnly: false, // Inicialmente el editor es solo lectura
        // ...separateProps(options).options,
        ...options,
      }}
      onChange={(value: string | undefined, env: any) => {
        onChange &&
          onChange({
            target: {
              name,
              value,
            },
          })
      }}
      // onMount={(editor) => {
      //   editorRef.current = editor
      //   // Asegúrate de que el documento se formatee cuando se monte el editor
      //   editor
      //     ?.getAction('editor.action.formatDocument')
      //     ?.run()
      //     ?.then(() => {
      //       // Establecer el editor en modo solo lectura después de formatear
      //       editor.updateOptions({ readOnly: separateProps(options).readOnly })
      //     })
      // }}
    />
  )
}

export default React.memo(CodeEditor)
