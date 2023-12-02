import { test, expect, Locator } from '@playwright/test';

async function getBackgroundColor(locator: Locator) {
    return locator.evaluate((l) => {
        return window.getComputedStyle(l).getPropertyValue('background-color')
    })
}

test('has title', async ({ page }) => {
    const edoPrimaryRGB = 'rgb(66, 96, 45)'
    const meijiPrimaryRGB = 'rgb(0, 98, 132)'
    const taishoPrimaryRGB = 'rgb(86, 63, 46)'
    const showaPrimaryRGB = 'rgb(27, 129, 62)'
    const heiseiPrimaryRGB = 'rgb(139, 129, 195)'
    const reiwaPrimaryRGB = 'rgb(46, 169, 223)'


    await page.goto('/');
    const header = page.getByLabel('header')

    // open the drawer
    const drawerToggle = page.getByLabel('drawer-toggle-button')
    await drawerToggle.click()

    const themeToggle = page.getByLabel('theme-toggle')
    await expect(themeToggle).toBeVisible()
    expect(await getBackgroundColor(header)).toBe(edoPrimaryRGB)
    
    // toggle to showa
    const showa = page.getByText('昭和')
    await showa.click()
    expect(await getBackgroundColor(header)).toBe(showaPrimaryRGB)

    // Reiwa
    const reiwa = page.getByText('令和')
    await reiwa.click()
    expect(await getBackgroundColor(header)).toBe(reiwaPrimaryRGB)

    // Taisho
    const taisho = page.getByText('大正')
    await taisho.click()
    expect(await getBackgroundColor(header)).toBe(taishoPrimaryRGB)

    // Heisei
    const heisei = page.getByText('平成')
    await heisei.click()
    expect(await getBackgroundColor(header)).toBe(heiseiPrimaryRGB)

    // Edo
    const edo = page.getByText('江戸')
    await edo.click()
    expect(await getBackgroundColor(header)).toBe(edoPrimaryRGB)

    // Meiji
    const meiji = page.getByText('明治')
    await meiji.click()
    expect(await getBackgroundColor(header)).toBe(meijiPrimaryRGB)
});
