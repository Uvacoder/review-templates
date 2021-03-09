<template>
  <Layout>
    <h1>About</h1>
    <p>I review stuff here.</p>
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
