// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    components: [{ path: '@/components', pathPrefix: false }],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },

})