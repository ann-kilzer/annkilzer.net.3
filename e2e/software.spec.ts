import { test, expect } from '@playwright/test';

test('shows the software page', async ({ page }) => {
    await page.goto('/software')
    await expect(page.getByRole('heading', {name: 'Software'})).toBeInViewport()
})
