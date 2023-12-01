import { Dispatch, FC, PropsWithChildren, createContext, useReducer } from 'react'
import { Theme, ThemeProvider } from '@emotion/react'
import { edoTheme, heiseiTheme, meijiTheme, reiwaTheme, showaTheme, taishoTheme } from './themes'
import ThemeName from './themeName'


export const ThemeDispatchContext = createContext<Dispatch<ChangeThemeAction>>({} as Dispatch<ChangeThemeAction>)

interface ChangeThemeAction {
    newTheme: ThemeName
}

function themeReducer(state: Theme, action: ChangeThemeAction) {
    console.log(state)
    switch (action.newTheme) {
        case ThemeName.Edo: {
            return edoTheme()
        }
        case ThemeName.Meiji: {
            return meijiTheme()
        }
        case ThemeName.Taisho: {
            return taishoTheme()
        }
        case ThemeName.Showa: {
            return showaTheme()
        }
        case ThemeName.Heisei: {
            return heiseiTheme()
        }
        case ThemeName.Reiwa: {
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
