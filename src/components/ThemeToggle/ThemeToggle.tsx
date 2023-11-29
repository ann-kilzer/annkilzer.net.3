import { FC } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

interface ThemeToggleProps {
    handleChange?: (event: Event, value: number | number[]) => void
}

const marks = [
    {
        value: 0,
        label: '江戸',
        key: 'edo'
    },
    {
        value: 20,
        label: '明治',
        key: 'meiji'
    },
    {
        value: 40,
        label: '大正',
        key: 'taisho'
    },
    {
        value: 60,
        label: '昭和',
        key: 'showa'
    },
    {
        value: 80,
        label: '平成',
        key: 'heisei'
    },
    {
        value: 100,
        label: '令和',
        key: 'reiwa'
    }
]

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
