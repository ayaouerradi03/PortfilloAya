import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

/**
 * The site ships to GitHub Pages as a *project* page, i.e.
 * https://soufianetiraoui.github.io/PortfilloAya/ — so every built asset URL
 * has to be prefixed with the repo name or the CSS/JS/favicon all 404.
 *
 * Only the production build gets that prefix; `npm run dev` stays on `/` so
 * local URLs remain short. Override with BASE_PATH when the deploy target
 * changes — set BASE_PATH=/ if this ever moves to a user page or a custom
 * domain, and nothing else in the config needs touching.
 *
 * https://vite.dev/config/
 */
export default defineConfig(({ command }) => ({
  base: process.env.BASE_PATH ?? (command === 'build' ? '/PortfilloAya/' : '/'),
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
}))
