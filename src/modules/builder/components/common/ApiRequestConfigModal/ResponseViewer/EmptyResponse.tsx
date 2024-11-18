import { CircularProgress } from '@mui/material'
import { EmptyResponseWrapper } from './styles'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

interface Props {
  loading?: boolean
  description?: string
}

const EmptyResponse: React.FC<Props> = ({ loading, description }) => {
  return (
    <EmptyResponseWrapper>
      {loading ? (
        <CircularProgress className="mb-1" />
      ) : (
        <RocketLaunchIcon className="icon" />
      )}
      <h2 className="title">{loading ? 'Cargando...' : 'Nada que ver'}</h2>
      <p className="description">
        {loading
          ? 'Esperando respuesta...'
          : description || 'Ejecuta el query para ver más detalles'}
      </p>
    </EmptyResponseWrapper>
  )
}

export default EmptyResponse
