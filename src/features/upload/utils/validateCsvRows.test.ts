import { describe, it, expect } from 'vitest'
import type { CsvRow } from './parseCsvFile'
import validateCsvRows from './validateCsvRows'

describe('validateCsvRows', () => {
  it('returns an error when there are no rows', () => {
    const rows: CsvRow[] = []
    const result = validateCsvRows(rows)
    expect(result).toBe('CSV contains no customer rows')
  })

  it('returns null when row is present', () => {
    const rows: CsvRow[] = [{ Email: 'ava@example.com' }]
    const result = validateCsvRows(rows)
    expect(result).toBeNull()
  })
})
