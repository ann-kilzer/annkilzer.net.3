import {edo, meiji, taisho, showa, heisei, reiwa } from './palettes'
import typography from './typography/default'
import createTheme from '@mui/material/styles/createTheme'

function edoTheme() {
    return createTheme({
        typography,
        palette: edo,
    })
}

function meijiTheme() {
    return createTheme({
        typography,
        palette: meiji
    })
}

function taishoTheme() {
    return createTheme({
        typography,
        palette: taisho
    })
}

function showaTheme() {
    return createTheme({
        typography,
        palette: showa
    })
}

function heiseiTheme() {
    return createTheme({
        typography,
        palette: heisei
    })
}

function reiwaTheme() {
    return createTheme({
        typography,
        palette: reiwa
    })
}

export {edoTheme, meijiTheme, taishoTheme, showaTheme, heiseiTheme, reiwaTheme}
