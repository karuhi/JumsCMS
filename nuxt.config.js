import pkg from './package'

const fs = require('fs')
const jsonData = JSON.parse(fs.readFileSync('src/assets/json/data.json'))

const baseName = process.env.BASE_NAME || 'JumsCMS'
const baseDesc = process.env.BASE_DISC || 'Breakthrough CMS written in JavaScript.'
const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const baseOgp = process.env.BASE_OGP || '/lib/img/ogp'
const baseDir = process.env.BASE_DIR || '/'

export default {
  mode: 'universal',
  srcDir: 'src/',
  env: {
    baseName: baseName,
    baseDesc: baseDesc,
    baseUrl: baseUrl,
    baseOgp: baseOgp,
    jsonData: jsonData,
  },
  router: {
    base: baseDir,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'description', name: 'description', content: baseDesc },
      { hid: 'og:site_name', property: 'og:site_name', content: baseName },
      { hid: 'og:type', property: 'og:type', content: 'artice' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      { hid: 'og:description', property: 'og:description', content: baseDesc },
      { hid: 'og:image', property: 'og:image', content: `${baseOgp}/common.jpg` },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@JumsCMS' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
