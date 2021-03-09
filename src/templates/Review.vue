<template>
  <Layout>
    <g-link to="/">Back to reviews</g-link>
    <article>
      <header>
        <h1>{{ $page.review.title }}</h1>
        <div>
          <span>Reviewed on:</span>
          <time :datetime="$page.review.date">
            {{ $page.review.date }}
          </time>
        </div>
      </header>
      <div>
        <client-only>
          <star-rating v-model="stars" :increment="0.5" :read-only="true" />
        </client-only>
      </div>
      <div v-html="$page.review.content" />
    </article>
  </Layout>
</template>

<page-query>
query Review($path: String!) {
  review (path: $path) {
    title
    date
    stars
    content
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      stars: 0,
    }
  },
  components: {
    StarRating: () => import('vue-star-rating'),
  },
  mounted() {
    this.stars = this.$page.review.stars
  },
}
</script>

<style scoped>
article > * + * {
  margin-top: 20px;
}

article header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
