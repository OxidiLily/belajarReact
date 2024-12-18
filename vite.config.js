// Import fungsi defineConfig dari Vite untuk konfigurasi dengan TypeScript support
import { defineConfig } from 'vite'
// Import plugin React untuk menangani file JSX/TSX
import react from '@vitejs/plugin-react'

// Konfigurasi Vite
export default defineConfig({
    // Mengaktifkan plugin React
    plugins: [react()],

    // Konfigurasi untuk mode preview (build preview)
    preview: {
        // Menggunakan port 8001 untuk preview server
        port: 8001,
        // Jika port 8001 sudah dipakai, akan error (tidak mencari port lain)
        strictPort: true
    },

    // Konfigurasi development server
    server: {
        // Mengizinkan akses dari semua interface jaringan (tidak hanya localhost)
        host: "0.0.0.0",
        // Menggunakan port 8001 untuk development server
        port: 8001,
        // Jika port 8001 sudah dipakai, akan error
        strictPort: true,
        // Menentukan origin URL untuk development server
        // Biasanya digunakan untuk CORS atau proxy settings
        origin: "http://0.0.0.0:3000"
    }
})