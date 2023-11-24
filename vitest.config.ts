/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        coverage: {
            provider: 'istanbul',
            enabled: true,
            reporter: ['text', 'json', 'html'],
            extension: ['.ts', '.tsx'],
            all: true,
            include: ['src/**'],
            exclude: ['src/tests/**'],
            watermarks: {
                statements: [60, 80],
                functions: [60, 80],
                branches: [60, 80],
                lines: [60, 80]
            }
        },
        environment: 'jsdom',
        setupFiles: ['./src/tests/setup.ts']
    }
})
