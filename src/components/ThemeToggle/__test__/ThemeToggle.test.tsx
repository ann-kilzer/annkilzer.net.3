import { describe, expect, it, vi } from 'vitest'
import { render } from '@/tests/customRender'
import { screen, waitFor, fireEvent } from '@testing-library/react'
import ThemeToggle from '../ThemeToggle'

describe('ThemeToggle', () => {
    it('should display ThemeToggle', async () => {
        render(<ThemeToggle />)
        const toggle = await screen.findByLabelText('theme-toggle')
        expect(toggle).toBeVisible()

        const edo = await screen.findByText('江戸')
        expect(edo).toBeVisible()
        const meiji = await screen.findByText('昭和')
        expect(meiji).toBeVisible()
        const taisho = await screen.findByText('大正')
        expect(taisho).toBeVisible()
        const showa = await screen.findByText('昭和')
        expect(showa).toBeVisible()
        const heisei = await screen.findByText('平成')
        expect(heisei).toBeVisible()
        const reiwa = await screen.findByText('令和')
        expect(reiwa).toBeVisible()
    })

    // Unfortunately it was hard to do this in the Testing Library way...
    // FireEvent works. Note that the discrete slider "sticks" at each step
    // so it's not possible to go from 0 - 100 in one click
    it.skip('should toggle through each era', async () => {
        const spy = vi.fn()
        render(<ThemeToggle />)
        const toggle = await screen.findByLabelText('theme-toggle')
        expect(toggle).toHaveValue('0')

        // slide up
        fireEvent.change(toggle, {
            target: { value: 20 }
        });

        await waitFor(() => {
            expect(spy).toHaveBeenCalledOnce()
            expect(toggle).toHaveValue('20')
        })

        // and up
        fireEvent.change(toggle, {
            target: { value: 40 }
        });

        await waitFor(() => {
            expect(spy).toHaveBeenCalledTimes(2)
            expect(toggle).toHaveValue('40')
        })

        // and down
        fireEvent.change(toggle, {
            target: { value: 10 }
        });

        await waitFor(() => {
            expect(spy).toHaveBeenCalledTimes(3)
            expect(toggle).toHaveValue('20')
        })
    })
})
