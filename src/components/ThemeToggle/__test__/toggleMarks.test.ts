import { describe, it, expect } from 'vitest'
import { getKey } from '../toggleMarks'
import ThemeName from '@/theme/themeName'

describe('Toggle Marks', () => {
    it('should get the correct key for each toggle mark', () => {
        expect(getKey(0)).toEqual(ThemeName.Edo)
        expect(getKey(20)).toEqual(ThemeName.Meiji)
        expect(getKey(40)).toEqual(ThemeName.Taisho)
        expect(getKey(60)).toEqual(ThemeName.Showa)
        expect(getKey(80)).toEqual(ThemeName.Heisei)
        expect(getKey(100)).toEqual(ThemeName.Reiwa)
    })

    it('should get the default key on invalid input', () => {
        expect(getKey(120)).toEqual(ThemeName.Edo)
    })
})
