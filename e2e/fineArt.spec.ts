import { test, expect } from '@playwright/test';

test('navigates to page', async ({ page }) => {
    await page.goto('/art');

    await expect(page.getByText('Due to blatant disregard of IP law and robots.txt by major AI companies, I am no longer publishing my artwork on my website. Please reach out directly to view my portfolio.')).toBeInViewport()
});
