import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    preview: {
        port: 8001,
        strictPort: true
    },
    server: {
        host: "0.0.0.0",
        port: 8001,
        strictPort: true,
        origin: "http://0.0.0.0:3000"
    }
})