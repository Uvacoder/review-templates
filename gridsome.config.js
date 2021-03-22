module.exports = {
  siteName: 'Marks Reviews',
  siteUrl: 'https://marks.reviews',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Review',
        path: './src/reviews/*.md',
        route: '/:path',
      },
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://marks.reviews',
        sitemap: 'https://marks.reviews/sitemap.xml',
        policy: [ { userAgent: '*', allow: '/' } ]
      }
    },
    { use: '@gridsome/plugin-sitemap' }
  ],
   css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss')],
      },
    },
  },
}
