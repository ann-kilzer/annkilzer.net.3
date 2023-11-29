import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import ThemeToggle from '../ThemeToggle'

describe('ThemeToggle', () => {
    it('should display ThemeToggle', async () => {
        render(<ThemeToggle />)
        const toggle = await screen.findByLabelText('theme-toggle')
        expect(toggle).toBeVisible()
    })
})
