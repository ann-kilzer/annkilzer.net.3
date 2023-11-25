import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import FineArt from '../FineArt'

describe('FineArt Route', () => {
    it('should display the FineArt Route', async () => {
        render(<FineArt />)
        const text = await screen.findByText('Coming Soon')
        expect(text).toBeVisible()
    })
})
