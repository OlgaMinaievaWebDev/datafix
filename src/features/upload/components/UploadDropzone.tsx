import { useState, type ChangeEvent, type DragEvent } from 'react'
import type { CsvRow } from '../utils/parseCsvFile'
import validateCsvFile from '../utils/validateCsvFile'
import parseCsvFile from '../utils/parseCsvFile'
import validateCsvHeaders from '../utils/validateCsvHeaders'
import validateCsvRows from '../utils/validateCsvRows'
import validateCsvParseErrors from '../utils/validateCsvParseErrors'

type UploadDropzoneProps = {
  parsedRows: CsvRow[]
  onParsedRowsChange: (rows: CsvRow[]) => void
}

function UploadDropzone({
  parsedRows,
  onParsedRowsChange,
}: UploadDropzoneProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isParsing, setIsParsing] = useState(false)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    e.target.value = ''
    processFile(file)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0] ?? null
    processFile(file)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const resetUploadState = (error: string | null = null): void => {
    setIsParsing(false)
    setSelectedFile(null)
    setFileError(error)
    onParsedRowsChange([])
  }

  const processFile = (file: File | null): void => {
    if (!file) {
      resetUploadState()
      return
    }

    const validationError = validateCsvFile(file)

    if (validationError) {
      resetUploadState(validationError)
      return
    }

    setSelectedFile(file)
    setFileError(null)
    onParsedRowsChange([])
    setIsParsing(true)

    parseCsvFile(
      file,
      (results) => {
        setIsParsing(false)

        const parsingError =
          validateCsvParseErrors(results.errors) ??
          validateCsvHeaders(results.meta.fields) ??
          validateCsvRows(results.data)

        if (parsingError) {
          resetUploadState(parsingError)
          return
        }

        onParsedRowsChange(results.data)
      },
      (error) => {
        resetUploadState(`Could not read CSV: ${error.message}`)
      },
    )
  }

  return (
    <div
      className={`${isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-white'} mt-8 border-2 border-dashed rounded-2xl p-6 sm:p-10 text-center transition-colors`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      <input
        id="customer-csv-file"
        type="file"
        accept=".csv,text/csv"
        aria-describedby="csv-file-help"
        className="peer sr-only"
        onChange={handleFileChange}
      />
      <label
        htmlFor="customer-csv-file"
        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-700 sm:w-auto"
      >
        Choose CSV file
      </label>
      <p id="csv-file-help" className="mt-4 text-sm text-slate-600">
        Drag and drop a CSV file here, or choose a file.
      </p>

      {isParsing && (
        <p role="status" className="mt-2 text-sm font-medium text-blue-700">
          Reading CSV...
        </p>
      )}

      {fileError && (
        <p role="alert" className="mt-3 text-sm font-medium text-red-700">
          {fileError}
        </p>
      )}

      <p
        aria-live="polite"
        aria-atomic="true"
        className="mt-3 wrap-break-word text-sm text-slate-700"
      >
        {fileError
          ? ''
          : selectedFile
            ? `Selected: ${selectedFile.name}`
            : 'No file selected'}
      </p>

      {parsedRows.length > 0 && (
        <p className="mt-2 text-sm font-medium text-green-700">
          {parsedRows.length} customer rows found
        </p>
      )}
    </div>
  )
}

export default UploadDropzone
