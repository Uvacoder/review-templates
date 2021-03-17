<template>
  <Layout>
    <div class="prose">
      <h1>My Reviews</h1>

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
