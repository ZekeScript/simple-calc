// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('handleButtonClick adds the value to the expression', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  const button = await page.$('#seven')
  button.click()

  const screen = await getByText('screen')
  expect(screen.textContent).toBe('7')
})
