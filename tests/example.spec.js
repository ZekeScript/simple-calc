// @ts-check
const { test, expect } = require('@playwright/test')

const LOCALHOST_URL = 'http://localhost:5173/'

test('Addition Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
})

test('Subtraction Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
})

test('Multiplication Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
})

test('Division Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
})

test('AC Button Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
})

test('DEL Button Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
})

test('Input Validation Test', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
})
