import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포 시:
// - username.github.io 레포 → base: '/'
// - 일반 레포 (username.github.io/repo-name) → base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
