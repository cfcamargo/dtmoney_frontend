// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: 'DT Money',
        meta: [
          { name: 'description', content: 'Dtmoney WebSite.' },
        ],
        link: [{ rel: 'icon', type: 'image/svg', href: '/images/favicon.svg' }]

      }
    },
    css: ['~/assets/css/main.css'],
    components: [{ path: '@/components', pathPrefix: false }],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },

})
