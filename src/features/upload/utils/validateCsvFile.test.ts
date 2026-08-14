import { describe, it, expect } from 'vitest'
import validateCsvFile from './validateCsvFile'

describe('validateCsvFile', () => {
  it('returns null when file is valid', () => {
    const file = new File(
      ['Full Name,Email\nAva Patel,ava@example.com'],
      'customers.csv',
      { type: 'text/csv' },
    )
    const result = validateCsvFile(file)
    expect(result).toBeNull()
  })

  it('return an error because the file has wrong extension', () => {
    const file = new File(
      ['Full Name,Email\nAva Patel,ava@example.com'],
      'customers.txt',
      { type: 'text/plain' },
    )
    const result = validateCsvFile(file)
    expect(result).toBe(
      'That file type isn’t supported. Choose a CSV file to continue.',
    )
  })

  it('returns an error because a file is empty', () => {
    const file = new File([], 'customers.csv', {
      type: 'text/csv',
    })
    const result = validateCsvFile(file)
    expect(result).toBe(
      'This file is empty. Choose a CSV file containing column headers and at least one customer row.',
    )
  })
})
