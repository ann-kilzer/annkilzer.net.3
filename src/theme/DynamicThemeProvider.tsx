import { FC, PropsWithChildren, useReducer } from 'react'
import { Theme, ThemeProvider } from '@emotion/react'
import edo from './palettes/edo'
import typography from './typography/default'
import createTheme from '@mui/material/styles/createTheme'
import ThemeName from './themeName'


interface ChangeThemeAction {
    newTheme: ThemeName
}

function edoTheme() {
    return createTheme({
        typography,
        palette: edo,
    })
}

function reducer(state: Theme, action: ChangeThemeAction) {
    console.log(state)
    switch (action.newTheme) {
        case ThemeName.edo: {
            return edoTheme()
        }
        default: {
            return edoTheme()
        }
    }
}

const DynamicThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme] = useReducer(reducer, edoTheme())

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}

export default DynamicThemeProvider
