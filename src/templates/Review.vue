<template>
  <Layout>
    <div class="prose">
      <g-link to="/">Back to reviews</g-link>

      <article class="mt-4">
        <header>
          <h1>{{ $page.review.title }}</h1>

          <div>
            <span>Reviewed on:</span>
            <time :datetime="$page.review.date">
              {{ $page.review.date }}
            </time>
          </div>
        </header>

        <div class="my-6">
          <client-only>
            <star-rating v-model="stars" :increment="0.5" :read-only="true" />
          </client-only>
        </div>

        <div v-html="$page.review.content" />
      </article>
    </div>
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
  metaInfo() {
    return {
      title: this.$page.review.title,
    }
  },
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
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: this.$page.review.title,
        page_path: `/${this.$page.review.path}`,
      })
    },
  },
}
</script>
