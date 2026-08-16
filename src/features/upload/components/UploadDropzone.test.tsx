import { render, screen } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'
import UploadDropzone from './UploadDropzone'

describe('UploadDropzone', () => {
  it('shows the empty state initially', () => {
    render(<UploadDropzone parsedRows={[]} onParsedRowsChange={vi.fn()} />)
    expect(screen.getByText('No file selected')).toBeInTheDocument()
  })
})
