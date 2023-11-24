import { test, expect } from '@playwright/test';

test('shows the 404 not found page on an unexpected route', async ({ page }) => {
    await page.goto('/oops');

    await expect(page.getByRole('heading', { name: '404: Not Found' })).toBeVisible()
    const goHome = page.getByRole('link', { name: 'Go back home'})
    await goHome.click()
    await page.waitForURL('/')
});
