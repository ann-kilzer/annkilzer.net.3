import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import CssBaseline from '@mui/material/CssBaseline';
import DynamicThemeProvider from '@/theme/DynamicThemeProvider';
import { MemoryRouter } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <DynamicThemeProvider>
            <CssBaseline />
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </DynamicThemeProvider >
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export { customRender as render }
