import { describe, expect, it } from 'vitest'
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
    it('should toggle through each era', async () => {
        render(<ThemeToggle />)
        const toggle = await screen.findByLabelText('theme-toggle')
        expect(toggle).toHaveValue('0')

        // step up by 20
        for (let i = 0; i <= 100; i += 20) {
            // slide up
            fireEvent.change(toggle, {
                target: { value: i }
            });

            await waitFor(() => {
                expect(toggle).toHaveValue(`${i}`)
            })
        }

        // no further than 100
        fireEvent.change(toggle, {
            target: { value: 120 }
        });

        await waitFor(() => {
            expect(toggle).toHaveValue('100')
        })

        // step down by 20
        for (let i = 100; i >= 0; i -= 20) {
            // slide up
            fireEvent.change(toggle, {
                target: { value: i }
            });

            await waitFor(() => {
                expect(toggle).toHaveValue(`${i}`)
            })
        }

        // not negative
        fireEvent.change(toggle, {
            target: { value: -1 }
        });

        await waitFor(() => {
            expect(toggle).toHaveValue('0')
        })
    })
})
