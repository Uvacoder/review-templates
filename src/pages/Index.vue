<template>
  <Layout>
    <div class="prose max-w-none">
      <h1>No Faff Reviews</h1>

      <p>
        Hello I am Mark and here are <strong>5</strong> of my latest reviews, you can see all
        <strong>{{ $page.count.totalCount }}</strong> reviews on the main
        <g-link to="/reviews/">reviews page</g-link>.
      </p>

      <ul>
        <li v-for="(review, index) in $page.reviews.edges" :key="review.node.id" :class="{ new: index === 0 }">
          <g-link :to="review.node.path">
            {{ review.node.title }}
          </g-link>
        </li>
      </ul>

      <g-link to="/reviews/">View all reviews</g-link>
    </div>
  </Layout>
</template>

<page-query>
  query {
    reviews: allReview(limit: 5, sortBy: "date", order: DESC) {
      edges {
        node {
          title
          path
        }
      }
    }
    count: allReview {
      totalCount
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
