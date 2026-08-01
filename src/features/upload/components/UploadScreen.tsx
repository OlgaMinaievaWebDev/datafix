import UploadDropzone from './UploadDropzone'

function UploadScreen() {
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
      <UploadDropzone />
    </section>
  )
}

export default UploadScreen
