<template>
  <Layout>
    <div class="prose">
      <h1>Reviews</h1>

      <ul>
        <li v-for="review in $page.reviews.edges" :key="review.node.id">
          <g-link :to="review.node.path">
            {{ review.node.title }}
          </g-link>
        </li>
      </ul>
    </div>
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
    title: 'Reviews',
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: 'Reviews',
        page_path: '/reviews/',
      })
    },
  },
}
</script>
