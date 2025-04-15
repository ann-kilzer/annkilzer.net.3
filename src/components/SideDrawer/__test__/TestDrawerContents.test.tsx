import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from '@/tests/customRender'
import { screen, within } from '@testing-library/react'
import DrawerContents from '../DrawerContents'

describe('DrawerContents: Desktop', () => {
    it('should display the DrawerContents', async () => {
        render(<DrawerContents />)
        const content = await screen.findByLabelText('theme-toggle')
        expect(content).toBeVisible()
    })
})

describe('DrawerContents: Mobile', () => {
    beforeEach(() => {
        window.matchMedia = vi.fn().mockImplementation(query => ({
            matches: true, // Simulate mobile for all queries
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            media: query,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
            onchange: null,
            addListener: vi.fn(), // deprecated
            removeListener: vi.fn(),
        }));
    });

    it('should display the DrawerContents', async () => {
        render(<DrawerContents />)
        const content = await screen.findByLabelText('theme-toggle')
        expect(content).toBeVisible()
    })

    it('should show the NavLinks on mobile screens', async () => {
        render(<DrawerContents />)

        const links = await screen.findAllByRole('link')
        expect(links).toHaveLength(4)
        const title = await within(links[0]).findByText('Home')
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
})
