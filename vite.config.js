import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/projeto-to-do-list-vue",
  plugins: [vue()],
})
