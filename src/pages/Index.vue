<template>
  <Layout>
    <h1>Welcome to Marks Reviews</h1>
    <p>Enjoy a collection of reviews about things in my life.</p>
    <ul>
      <li v-for="review in $page.reviews.edges" :key="review.node.id">
        <g-link :to="review.node.path">
          {{ review.node.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query { 
    reviews: allReview(sortBy: "title", order: ASC) { 
      edges { 
        node { 
          title 
          path
        } 
      } 
    } 
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Marks Reviews',
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: 'Home',
        page_path: '/',
      })
    },
  },
}
</script>
