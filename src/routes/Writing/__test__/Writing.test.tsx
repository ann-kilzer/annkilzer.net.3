import { describe, expect, it } from 'vitest'
import { render } from '../../../tests/customRender'
import { screen } from '@testing-library/react'
import Writing from '../Writing'

describe('FineArt Route', () => {
    it('should display the FineArt Route', async () => {
        render(<Writing />)
        const text = await screen.findByText('Coming Soon')
        expect(text).toBeVisible()
    })
})
