<template>
  <Layout>
    <div class="prose prose-xl">
      <h1>About</h1>
      <p>I review stuff here.</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
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
