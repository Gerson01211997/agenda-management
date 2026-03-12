// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', "@nuxt/eslint", 'nuxt-headlessui', '@pinia/nuxt', '@nuxt/test-utils/module'],
  pinia: {
    autoImports: ['defineStore'],
  },
  headlessui: {
    prefix: 'Headless'
  },
  typescript: {
    typeCheck: false
  },
  imports: {
    dirs: ['./utils/types']
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:4000'
    }
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
  }
})