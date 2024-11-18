import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import EmptyResponse from './EmptyResponse'
import CodeEditor from '../../../shared/MonacoEditor/MonacoEditor'

type DATA_TYPES =
  | 'json'
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'text'
  | 'stream'

type Languajes = {
  [key in DATA_TYPES]?: string
}

interface Props {
  loading?: boolean
  formHandler?: FormHandlerProps
  data?: any
  dataType?: DATA_TYPES
}

const ResponsePreview: React.FC<Props> = ({
  loading,
  data,
  dataType = 'json',
}) => {
  const getLanguage = (dataType: DATA_TYPES): string | undefined => {
    const languages: Languajes = {
      json: 'json',
      arraybuffer: 'plaintext', // 'plaintext' como ejemplo, ajusta según necesidad
      blob: 'plaintext', // 'plaintext' o 'json' dependiendo del uso
      document: 'text',
      text: 'text',
      stream: 'text',
    }

    return languages[dataType]
  }

  const isJson = dataType.toLowerCase() === 'json' && typeof data !== 'string'
  const dataValue = isJson ? JSON.stringify(data) : data

  return (
    <>
      {(loading || !data) && <EmptyResponse loading={loading} />}
      {!loading && data && (
        <CodeEditor
          language={getLanguage(dataType.toLowerCase() as any) as any}
          value={dataValue} // Asegúrate de que sea una cadena en todos los casos
          height='220px'
          options={{
            readOnly: false,
          }}
        />
      )}
    </>
  )
}

export default ResponsePreview
