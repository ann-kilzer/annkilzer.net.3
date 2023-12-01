import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import Router from './routes/Router';
import { GlobalStyles } from '@mui/material';
import DynamicThemeProvider from './theme/DynamicThemeProvider';
import './index.css'

// Supports weights 400-900
import '@fontsource-variable/playfair-display';
import '@fontsource/lusitana'
import '@fontsource/noto-sans-jp/300.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DynamicThemeProvider>
            <CssBaseline />
            <GlobalStyles styles={{ body: { backgroundColor: '#FCFAF2' } }} />
            <Router />
        </DynamicThemeProvider>
    </React.StrictMode>,
)
