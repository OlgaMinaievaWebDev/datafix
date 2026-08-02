import UploadDropzone from './UploadDropzone'
import type { CsvRow } from '../utils/parseCsvFile'

type UploadScreenProps = {
  parsedRows: CsvRow[]
  onParsedRowsChange: (rows: CsvRow[]) => void
}

function UploadScreen({ parsedRows, onParsedRowsChange }: UploadScreenProps) {
  return (
    <section
      className="mx-auto mt-10 max-w-2xl text-center sm:mt-12"
      aria-labelledby="upload-heading"
    >
      <h1
        id="upload-heading"
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Upload your customer CSV
      </h1>
      <p className="mt-3 text-slate-600 leading-7 sm:text-lg">
        Map, validate, and clean your customer data before importing it into
        your CRM.
      </p>
      <UploadDropzone
        parsedRows={parsedRows}
        onParsedRowsChange={onParsedRowsChange}
      />
    </section>
  )
}

export default UploadScreen
