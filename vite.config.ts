import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you're deploying to https://<username>.github.io/<repo-name>/
// (a project page, not a *.github.io root repo), set base to '/<repo-name>/'.
// If this repo IS named <username>.github.io, leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // <-- change 'portfolio' to your actual repo name
})
