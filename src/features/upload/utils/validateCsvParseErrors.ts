import type Papa from 'papaparse'

const validateCsvParseErrors = (errors: Papa.ParseError[]): string | null => {
  if (errors.length > 0) {
    return errors[0].message
  }

  return null
}

export default validateCsvParseErrors
