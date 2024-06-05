// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import PrimeVue from 'primevue/config';
export default defineNuxtConfig({
  routeRules: {

  },
  devtools: { enabled: true },
  modules: ["nuxt-security", "nuxt-primevue"],
  plugins: [
    '~/plugins/primevue.js'
  ],
  primevue: {
    usePrimeVue: true,
    components: {
      include: ['Button', 'DataTable']
    }
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css'],
  // alias: {
  //   'images': resolve(__dirname, './assets/images'),
  //   'style': resolve(__dirname, './assets/style'),
  //   'data': resolve(__dirname, './assets/other/data')
  // }
})