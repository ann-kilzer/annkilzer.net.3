import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme'
import ThemePreview from './routes/ThemePreview/ThemePreview'
import './index.css'

import '@fontsource/literata/500.css';
import '@fontsource/noto-sans-jp/400.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ThemePreview />
        </ThemeProvider>
    </React.StrictMode>,
)
