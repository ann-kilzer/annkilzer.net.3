import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import BaseLayout from '../BaseLayout'

describe('BaseLayout', () => {
    it('should display the BaseLayout', async () => {
        render(<BaseLayout />)
        const header = await screen.findByLabelText('header')
        expect(header).toBeVisible()
        const footer = await screen.findByLabelText('footer')
        expect(footer).toBeVisible()
    })
})
