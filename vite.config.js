import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pwc/', // <-- ESTA LÍNEA ES LA QUE SOLUCIONA EL ERROR 404 DE TU IMAGEN
})