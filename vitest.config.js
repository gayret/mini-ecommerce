import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    hookTimeout: 1000000,
    environment: 'happy-dom',
  },
  plugins: [vue()],
})
