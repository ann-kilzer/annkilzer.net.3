import { FC, PropsWithChildren, createContext, useReducer } from 'react'
import { Theme, ThemeProvider } from '@emotion/react'
import { edoTheme, reiwaTheme } from './themes'
import ThemeName from './themeName'


export const ThemeDispatchContext = createContext({})
interface ChangeThemeAction {
    newTheme: ThemeName
}

function themeReducer(state: Theme, action: ChangeThemeAction) {
    console.log(state)
    switch (action.newTheme) {
        case ThemeName.edo: {
            return edoTheme()
        }
        case ThemeName.reiwa: {
            return reiwaTheme()
        }
        default: {
            return edoTheme()
        }
    }
}

const DynamicThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, edoTheme())

    return <ThemeDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ThemeDispatchContext.Provider>
}

export default DynamicThemeProvider
