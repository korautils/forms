export const statusColors: Record<string, string> = {
  success: '#00b100',
  redirection: 'blue',
  clientError: 'orange',
  serverError: 'red',
  unknown: 'gray',
}

export const getColorForStatusCode = (statusCode: number): string => {
  if (statusCode >= 200 && statusCode < 300) return statusColors.success
  if (statusCode >= 300 && statusCode < 400) return statusColors.redirection
  if (statusCode >= 400 && statusCode < 500) return statusColors.clientError
  if (statusCode >= 500 && statusCode < 600) return statusColors.serverError
  return statusColors.unknown
}
