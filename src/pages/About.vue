<template>
  <Layout>
    <header>
      <div class="container py-16">
        <div class="space-y-8 max-w-prose">
          <h1 class="text-6xl font-extrabold uppercase sm:text-7xl">About</h1>

          <div>
            <p>
              I write my reviews here.
            </p>
          </div>
        </div>
      </div>
    </header>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.seoTitle,
      meta: [
        { itemprop: 'description', content: this.seoDescripton },
        { itemprop: 'name', content: this.seoTitle },
        { name: 'author', content: 'Mark' },
        { name: 'description', content: this.seoDescripton },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@itsmarkmead' },
        { name: 'twitter:description', content: this.seoDescripton },
        { name: 'twitter:image:src', content: '' },
        { name: 'twitter:site', content: this.seoUrl },
        { name: 'twitter:title', content: this.seoTitle },
        { property: 'og:description', content: this.seoDescripton },
        { property: 'og:image', content: '' },
        { property: 'og:site_name', content: 'Marks Reviews' },
        { property: 'og:title', content: this.seoTitle },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.seoUrl },
        { rel: 'canonical', href: this.seoUrl },
      ],
    }
  },
  data() {
    return {
      seoDescripton: 'Hi I am Mark and I have written some reviews on things that I have experience with, enjoy.',
      seoTitle: 'About',
      seoUrl: 'https://marks.reviews/about/',
    }
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: 'About',
        page_path: '/about/',
      })
    },
  },
}
</script>
