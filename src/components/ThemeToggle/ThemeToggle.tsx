import { FC, useContext } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { marks, getKey } from './toggleMarks'

import { ThemeDispatchContext } from '@/theme/DynamicThemeProvider'

const ThemeToggle: FC = () => {
    const dispatch = useContext(ThemeDispatchContext)

    const handleChange = (_e: Event, newValue: number | number[]) => {
        const value = (typeof (newValue) == 'number') ? newValue : newValue.at(0) || 0
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
