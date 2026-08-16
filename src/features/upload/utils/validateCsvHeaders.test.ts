import { describe, expect, it } from 'vitest'
import validateCsvHeaders from './validateCsvHeaders'

describe('validateCsvHeaders', () => {
  it('returns null when every header is present', () => {
    const headers = ['Full Name', 'Email', 'Phone']
    const result = validateCsvHeaders(headers)
    expect(result).toBeNull()
  })

  it('returns an error when a header contains only whitespace', () => {
    const headers = ['Full Name', '   ', 'Phone']
    const result = validateCsvHeaders(headers)
    expect(result).toBe('CSV headers are missing')
  })

  it.each([
    { caseName: 'undefined', headers: undefined },
    { caseName: 'an empty array', headers: [] },
  ])('returns an error when headers are $caseName', ({ headers }) => {
    const result = validateCsvHeaders(headers)

    expect(result).toBe('CSV headers are missing')
  })
})
