import { describe, expect, it } from 'vitest'
import { render } from '../../../tests/customRender'
import { screen } from '@testing-library/react'
import NotFound from '../NotFound'

describe('NotFound', () => {
    it('should display the NotFound route', async () => {
        render(<NotFound />)
        const hello = await screen.findByText('Not Found!')
        expect(hello).toBeVisible()
    })

})
