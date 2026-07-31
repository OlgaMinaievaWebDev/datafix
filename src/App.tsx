import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WorkflowStepper from './components/workflow/WorkflowStepper'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 w-full mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <WorkflowStepper />
        <h1 className="text-3xl font-bold">Upload your customer CSV</h1>
        <p>
          Map, validate, and clean your customer data before importing it into
          your CRM.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default App
