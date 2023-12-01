import edo from './palettes/edo'
import reiwa from './palettes/reiwa'
import typography from './typography/default'
import createTheme from '@mui/material/styles/createTheme'

function edoTheme() {
    return createTheme({
        typography,
        palette: edo,
    })
}

function reiwaTheme() {
    return createTheme({
        typography,
        palette: reiwa
    })
}

export {edoTheme, reiwaTheme}
