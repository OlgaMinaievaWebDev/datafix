const UNSUPPORTED_FILE_MESSAGE =
  'That file type isn’t supported. Choose a CSV file to continue.'

const EMPTY_FILE_MESSAGE =
  'This file is empty. Choose a CSV file containing column headers and at least one customer row.'

function validateCsvFile(file: File): string | null {
  if (!file.name.toLowerCase().endsWith('.csv')) {
    return UNSUPPORTED_FILE_MESSAGE
  }

  if (file.size === 0) {
    return EMPTY_FILE_MESSAGE
  }

  return null
}

export default validateCsvFile
