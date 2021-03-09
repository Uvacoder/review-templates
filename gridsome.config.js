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
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-T6132Z1GPP',
      },
    },
  ],
}
