import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import FineArt from '../FineArt'

describe('FineArt Route', () => {
    it('should display the FineArt Route', async () => {
        render(<FineArt />)
        const text = await screen.findByText('Due to blatant disregard of IP law and robots.txt by major AI companies, I am no longer publishing my artwork on my website. Please reach out directly to view my portfolio.')
        expect(text).toBeVisible()
    })
})
