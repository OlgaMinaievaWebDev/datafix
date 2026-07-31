function WorkflowStepper() {
  const stepsList = [
    'Upload',
    'Map fields',
    'Review errors',
    'Resolve duplicates',
    'Export',
  ]

  const currentStepIndex = 0

  return (
    <nav aria-label="CSV cleaning progress">
      <ol className="list-none flex flex-col gap-4 sm:grid sm:grid-cols-5">
        {stepsList.map((label, index) => {
          const isCurrent = currentStepIndex === index

          return (
            <li
              key={label}
              aria-current={isCurrent ? 'step' : undefined}
              className="flex items-center gap-2 sm:flex-col sm:text-center"
            >
              <span
                aria-hidden="true"
                className={`flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium ${
                  isCurrent
                    ? 'border-blue-700 bg-blue-700 text-white'
                    : 'border-slate-300 text-slate-600'
                }`}
              >
                {index + 1}
              </span>
              <span
                className={
                  isCurrent
                    ? 'font-medium text-slate-900'
                    : 'font-normal text-slate-500'
                }
              >
                {label}
              </span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default WorkflowStepper
