import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen, within } from '@testing-library/react'
import DesktopToolbar from '../DesktopToolbar'

describe('Header', () => {
    it('should display the DesktopToolbar', async () => {
        render(<DesktopToolbar />)
        const links = await screen.findAllByRole('link')
        expect(links).toHaveLength(4)
        const title = await within(links[0]).findByText('Ann Kilzer')
        expect(title).toBeVisible()
        expect(links[0]).toHaveAttribute('href', '/')
        const software = await within(links[1]).findByText('Software')
        expect(software).toBeVisible()
        expect(links[1]).toHaveAttribute('href', '/software')
        const art = await within(links[2]).findByText('Art')
        expect(art).toBeVisible()
        expect(links[2]).toHaveAttribute('href', '/art')
        const writing = await within(links[3]).findByText('Writing')
        expect(writing).toBeVisible()
        expect(links[3]).toHaveAttribute('href', 'https://blog.annkilzer.net')
    })

    it.todo('should show navigation links')
})
