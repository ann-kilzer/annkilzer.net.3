import { test, expect } from '@playwright/test';

test('navigates to page', async ({ page }) => {
    await page.goto('/writing');

    await expect(page.getByText('Coming Soon')).toBeInViewport()
});
