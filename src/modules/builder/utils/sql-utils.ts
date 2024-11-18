export const extractSqlVariables = (query: string): Array<string> => {
  const regex = /.:\s*([a-zA-Z_]\w*)/g
  const matches = []
  let match

  while ((match = regex.exec(query)) !== null) {
    if (match[0].search('::') < 0) {
      matches.push(match[1])
    }
  }

  return matches
}
