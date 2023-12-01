import createTheme from '@mui/material/styles/createTheme'
import edo from './palettes/edo'
import typography from './typography/default'

const theme = createTheme({
    typography,
    palette: edo,
})

export default theme
