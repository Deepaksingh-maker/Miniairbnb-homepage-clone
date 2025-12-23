import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  base: "/Miniairbnb-homepage-clone/",
  plugins: [tailwind(), react()],
})
