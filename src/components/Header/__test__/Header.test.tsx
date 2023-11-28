import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen, waitFor } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    it('should display the Header in desktop mode on wide screens', async () => {
        render(<Header />)
        const title = await screen.findByText('Ann Kilzer')
        expect(title).toBeVisible()
        const toolbar = await screen.findByLabelText('desktop-toolbar')
        expect(toolbar).toBeVisible()
    })

    it.todo('should toggle to the MobileToolbar on mobile screens', async () => {
        render(<Header />)
        globalThis.innerWidth = 500

        await waitFor(() => {
            expect(screen.getByLabelText('mobile-toolbar')).toBeVisible()
        })


    })
})
