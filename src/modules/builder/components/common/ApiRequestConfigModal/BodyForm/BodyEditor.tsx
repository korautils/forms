import classNames from 'classnames'
import { styled } from '@mui/material'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import CodeEditor from '../../../shared/MonacoEditor/MonacoEditor'
import { uuidv4 } from '@/modules/core/utils'
import React from 'react'
import { LANGUAGES_EDITOR } from '@/modules/builder/interfaces/general'

interface Props {
  name?: string
  language?: LANGUAGES_EDITOR
  formHandler?: FormHandlerProps
  className?: string
  height?: string | number
  disabled?: boolean
  disabledTitle?: string
}

const BodyEditorWrapper:any  = styled('div')`
  .margin-view-overlays {
    background-color: #f4f4f4;
  }
`

const BodyEditor: React.FC<Props> = ({
  name = uuidv4(),
  language = 'json',
  formHandler = {},
  className,
  height = '220px',
  disabled = false,
  disabledTitle,
}) => {
  const { watch, setValue } = formHandler
  const value = watch!(name) || ''

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setValue!(name, value)
  }

  return (
    <BodyEditorWrapper
      title={disabled ? disabledTitle : undefined}
      className={classNames(className, { disabled })}
    >
      <CodeEditor
        name={name}
        language={language}
        height={height}
        value={value}
        onChange={handleChange}
      />
    </BodyEditorWrapper>
  )
}

export default React.memo(BodyEditor)
