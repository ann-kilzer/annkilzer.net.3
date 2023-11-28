import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import DrawerContents from '../DrawerContents'

describe('DrawerContents', () => {
    it('should display the DrawerContents', async () => {
        render(<DrawerContents />)
        const content = await screen.findByText('Todo')
        expect(content).toBeVisible()
    })
})