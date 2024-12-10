// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/style.scss'],
  app: {
    head: {
      script: [
        {
          src: '/js/jquery.min.js',
          type: 'text/javascript'
        },
        {
          src: '/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        },

        {
          src: '/js/main.js',
          type: 'text/javascript'
        }
      ]
    },

    pageTransition: { name: 'page', mode: 'out-in' }

  },

  modules: [
    '@hypernym/nuxt-anime'
  ],


  experimental: {
    defaults: {
      nuxtLink: {
        // default values
        componentName: 'NuxtLink',
        activeClass: 'active',
      }
    }
  }
})
