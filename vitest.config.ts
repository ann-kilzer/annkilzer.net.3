/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        coverage: {
            provider: 'istanbul'
        },
        environment: 'jsdom',
        setupFiles: ['./src/tests/setup.ts']
    }
})
