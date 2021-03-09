<template>
  <Layout>
    <article>
      <header>
        <h1>{{ $page.review.title }}</h1>
        <time :datetime="$page.review.date">
          {{ $page.review.date }}
        </time>
      </header>
      <div>
        <star-rating v-model="stars" :increment="0.5" :read-only="true" />
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
import StarRating from 'vue-star-rating'

export default {
  data() {
    return {
      stars: 0,
    }
  },
  components: {
    StarRating,
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
