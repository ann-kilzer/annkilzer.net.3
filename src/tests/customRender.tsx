import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react'
import theme from '../theme/theme'

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider >
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export { customRender as render }
