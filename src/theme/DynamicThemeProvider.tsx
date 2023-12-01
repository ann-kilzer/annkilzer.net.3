import { FC, PropsWithChildren } from 'react'
import { ThemeProvider } from '@emotion/react'
import edo from './palettes/edo'
import typography from './typography/default'
import createTheme from '@mui/material/styles/createTheme'

const DynamicThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const theme = createTheme({
        typography,
        palette: edo,
    })

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}

export default DynamicThemeProvider
