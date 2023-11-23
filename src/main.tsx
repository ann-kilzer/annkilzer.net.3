import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme'
import RouterLayout from './routes/RouterLayout';
import './index.css'

import '@fontsource/literata/500.css';
import '@fontsource/noto-sans-jp/400.css'
import { GlobalStyles } from '@mui/material';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={{ body: { backgroundColor: '#DAC9A6' } }} />
            <RouterLayout />
        </ThemeProvider>
    </React.StrictMode>,
)
