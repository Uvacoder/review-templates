<template>
  <Layout>
    <article class="prose max-w-none">
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
          <star-rating v-model="$page.review.stars" :increment="0.5" :read-only="true" :show-rating="false" />
        </client-only>
      </div>

      <div v-html="$page.review.content" />
    </article>

    <footer class="p-4 space-y-4 bg-gray-100">
      <p class="text-lg font-bold uppercase">Read more reviews:</p>

      <div class="flow-root">
        <ul class="flex flex-wrap -mx-2 -my-1 list-none">
          <li v-for="review in $page.reviews.edges" :key="review.node.id" class="px-2 py-1">
            <g-link :to="review.node.path" class="underline">
              {{ review.node.title }}
            </g-link>
          </li>
        </ul>
      </div>
    </footer>
  </Layout>
</template>

<page-query>
query Review($path: String!) {
  review (path: $path) {
    title
    date
    stars
    content
    path
  }
  reviews: allReview(filter: { path: { ne: $path } }, sortBy: "title", order: ASC) {
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
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: this.$page.review.title,
        page_path: this.$page.review.path,
      })
    },
  },
}
</script>
