import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.29.5',  // Or use your IPv4 address like '192.168.1.5'
  //   port: 5173,        // You can change the port if needed
  // }
})
