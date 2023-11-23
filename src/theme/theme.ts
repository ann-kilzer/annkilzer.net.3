import createTheme from '@mui/material/styles/createTheme'
import colors from './colors'

const theme = createTheme({
    typography: {
        fontFamily: ['Noto Serif JP', 'serif'].join(',')
    },
    palette: colors,
})

export default theme
