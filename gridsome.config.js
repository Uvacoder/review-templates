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
  ],
   css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss')],
      },
    },
  },
}
