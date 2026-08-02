const validateCsvHeaders = (headers: string[] | undefined): string | null => {
  const missingHeader =
    !headers ||
    headers.length === 0 ||
    headers.some((header) => header.trim().length === 0)

  if (missingHeader) {
    return 'CSV headers are missing'
  }

  return null
}

export default validateCsvHeaders
