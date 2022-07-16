import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@roshan-labs/eslint-module', '@roshan-labs/http-module', '@roshan-labs/ui-module'],
})
