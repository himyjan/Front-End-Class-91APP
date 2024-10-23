import { defineConfig } from '@tanstack/start/config'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  vite: {
    plugins: [
      react(),
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})
