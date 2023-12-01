import { FC } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import marks from './marks'

interface ThemeToggleProps {
    handleChange?: (event: Event, value: number | number[]) => void
}

function getKey(value: number) {
    const index = value / 20
    return marks[index]?.key || ''
}

function defaultHandleChange(_e: Event, newValue: number | number[]) {
    const value = (typeof (newValue) == 'number') ? newValue : newValue.at(0) || 0
    console.log(getKey(value))
}

const ThemeToggle: FC<ThemeToggleProps> = ({
    handleChange = defaultHandleChange
}) => {
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
