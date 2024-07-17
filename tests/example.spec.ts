import { test, expect } from '@playwright/test'

test('example test', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'おはよう' })).toBeVisible()
})
