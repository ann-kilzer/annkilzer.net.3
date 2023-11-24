import { describe, expect, it } from 'vitest'
import { render } from '../../../tests/customRender'
import { screen } from '@testing-library/react'
import Software from '../Software'

describe('Software Route', () => {
    it('should display the Home Route', async () => {
        render(<Software />)
        const softwareHeading = await screen.findByRole('heading', { name: 'Software' })
        expect(softwareHeading).toBeVisible()
    })

})
