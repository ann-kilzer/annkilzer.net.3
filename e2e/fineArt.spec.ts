import { test, expect } from '@playwright/test';

test('navigates to page', async ({ page }) => {
    await page.goto('/art');

    await expect(page.getByText('Coming Soon')).toBeInViewport()
});
