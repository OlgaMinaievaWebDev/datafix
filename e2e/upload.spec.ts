import { expect, test } from '@playwright/test'

test('shows the CSV upload screen', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Upload your customer CSV' }),
  ).toBeVisible()

  await expect(page.getByText('No file selected')).toBeVisible()
})

test('uploads a valid CSV and shows the parsed row count', async ({ page }) => {
  await page.goto('/')

  const fileInput = page.getByLabel('Choose CSV file')

  await fileInput.setInputFiles('public/samples/customers-messy.csv')

  await expect(page.getByText('Selected: customers-messy.csv')).toBeVisible()

  await expect(page.getByText('12 customer rows found')).toBeVisible()
})
