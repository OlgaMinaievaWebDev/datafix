import { useState } from 'react'
import type { CsvRow } from './features/upload/utils/parseCsvFile'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WorkflowStepper from './components/workflow/WorkflowStepper'
import UploadScreen from './features/upload/components/UploadScreen'

function App() {
  const [parsedRows, setParsedRows] = useState<CsvRow[]>([])

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 w-full mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <WorkflowStepper />
        <UploadScreen
          parsedRows={parsedRows}
          onParsedRowsChange={setParsedRows}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
