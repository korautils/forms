import MonacoEditor, { useMonaco } from '@monaco-editor/react'
import { Skeleton } from '@mui/material'
import { editor } from 'monaco-editor'
import React, { useEffect, useRef, useState } from 'react'
import { uuidv4 } from '@/modules/core/utils'
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

const getEditorLanguage = (language: LANGUAGES_EDITOR) => {
  switch (language) {
    case 'postgres':
      return 'sql'
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
  // const monaco = useMonaco()

  //Agregar formateador sql
  // useEffect(() => {
  //   if (monaco && ['sql', 'postgres'].includes(language)) {
  //     monaco.languages.registerDocumentFormattingEditProvider('sql', {
  //       provideDocumentFormattingEdits: (model, options, token) => {
  //         console.log('OK', model.getValue())
  //         try {
  //           const formatted = format(model.getValue(), {
  //             language: getFormatUnit(language) as any, // Lenguaje para formatear
  //             indentStyle: 'standard',
  //             tabWidth: 4,
  //           })

  //           console.log('formated:', formatted)

  //           return [
  //             {
  //               range: model.getFullModelRange(),
  //               text: formatted,
  //             },
  //           ]
  //         } catch (error) {
  //           console.log(error)
  //         }
  //       },
  //     })
  //   }

  //
  // }, [monaco, language])

  return (
    <MonacoEditor
      height={height}
      language={getEditorLanguage(language)}
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
    />
  )
}

export default CodeEditor
