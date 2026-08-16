import Papa from 'papaparse'

export type CsvRow = Record<string, string>

const parseCsvFile = (
  file: File,
  onComplete: (results: Papa.ParseResult<CsvRow>) => void,
  onError: (error: Error) => void,
) => {
  return Papa.parse<CsvRow>(file, {
    header: true,
    skipEmptyLines: 'greedy',
    complete: onComplete,
    error: onError,
  })
}

export default parseCsvFile
