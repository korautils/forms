// StatusIndicator.tsx
import React from 'react'
import { getColorForStatusCode } from './status-colors'

interface StatusIndicatorProps {
  statusCode: number
  size?: number // Permitir personalización del tamaño
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  statusCode,
  size = 20,
}) => {
  const color = getColorForStatusCode(statusCode)

  const circleStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: color,
    display: 'inline-block',
    border: '1px solid #000', // Agregar un borde para mayor visibilidad
  }

  return (
    <div
      style={circleStyle}
      role="status"
      aria-label={`HTTP Status ${statusCode}: ${color}`}
    ></div>
  )
}

export default StatusIndicator
