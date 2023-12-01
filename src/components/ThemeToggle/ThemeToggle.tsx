import { FC, useContext } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import marks from './marks'
import ThemeName from '@/theme/themeName'
import { ThemeDispatchContext } from '@/theme/DynamicThemeProvider'

function getKey(value: number) {
    const index = value / 20
    return marks[index]?.key || ThemeName.Edo
}

const ThemeToggle: FC = () => {
    const dispatch = useContext(ThemeDispatchContext)

    const handleChange = (_e: Event, newValue: number | number[]) => {
        const value = (typeof (newValue) == 'number') ? newValue : newValue.at(0) || 0
        console.log(getKey(value))
        dispatch({ newTheme: getKey(value) })
    }

    return <Box sx={{ width: 225, ml: 2 }}>
        <Slider
            aria-label='theme-toggle'
            getAriaValueText={getKey}
            defaultValue={0}
            step={null}
            marks={marks}
            onChange={handleChange}
            color="secondary"
        />
    </Box>
}

export default ThemeToggle
