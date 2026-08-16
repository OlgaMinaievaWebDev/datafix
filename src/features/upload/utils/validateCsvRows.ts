import type { CsvRow } from './parseCsvFile'

const validateCsvRows = (rows: CsvRow[]): string | null => {
  if (rows.length === 0) {
    return 'CSV contains no customer rows'
  }
  return null
}

export default validateCsvRows
