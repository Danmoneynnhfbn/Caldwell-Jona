import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'about.html',
        'blog.html',
        'candidates.html',
        'career-services.html',
        'contact.html',
        'employers.html',
        'faq.html',
        'global-reach.html',
        'global-talent-sourcer.html',
        'how-we-work.html',
        'pricing.html',
        'services.html',
      ],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
