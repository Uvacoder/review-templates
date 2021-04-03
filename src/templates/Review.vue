<template>
  <Layout>
    <article>
      <div class="container pt-16 space-y-12">
        <header class="items-center justify-between lg:flex">
          <h1 class="text-6xl font-extrabold uppercase break-words max-w-prose sm:text-7xl">
            {{ $page.review.title }}
          </h1>

          <div class="mt-4 font-mono font-bold tracking-widest uppercase lg:mt-0">
            <span>Reviewed on:</span>

            <time :datetime="$page.review.date">
              {{ $page.review.date }}
            </time>
          </div>
        </header>

        <client-only>
          <star-rating
            v-model="$page.review.stars"
            :increment="0.5"
            :read-only="true"
            :show-rating="false"
          />
        </client-only>

        <div
          class="prose"
          v-html="$page.review.content"
        />

        <footer class="p-8 space-y-4 border border-black">
          <p class="font-mono text-lg font-bold tracking-widest uppercase">
            Read more reviews:
          </p>

          <div class="flow-root">
            <ul class="flex flex-wrap -mx-2 -my-1 list-none">
              <li
                v-for="review in $page.reviews.edges"
                :key="review.node.id"
                class="px-2 py-1"
              >
                <ReviewMiniLink
                  :title="review.node.title"
                  :path="review.node.path"
                />
              </li>
            </ul>
          </div>
        </footer>
      </div>
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
import ReviewMiniLink from '@/components/ReviewMiniLink'

export default {
  metaInfo() {
    return {
      title: this.$page.review.title,
      meta: [
        {
          itemprop: 'description',
          content: `Review of ${this.$page.review.title} by Mark. This review was written on ${
            this.$page.review.date
          }.`,
        },
        { itemprop: 'name', content: this.$page.review.title },
        { name: 'author', content: 'Mark' },
        {
          name: 'description',
          content: `Review of ${this.$page.review.title} by Mark. This review was written on ${
            this.$page.review.date
          }.`,
        },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@itsmarkmead' },
        {
          name: 'twitter:description',
          content: `Review of ${this.$page.review.title} by Mark. This review was written on ${
            this.$page.review.date
          }.`,
        },
        { name: 'twitter:site', content: `https://marks.reviews/${this.$page.review.path}` },
        { name: 'twitter:title', content: this.$page.review.title },
        {
          property: 'og:description',
          content: `Review of ${this.$page.review.title} by Mark. This review was written on ${
            this.$page.review.date
          }.`,
        },
        { property: 'og:site_name', content: 'Marks Reviews' },
        { property: 'og:title', content: this.$page.review.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `https://marks.reviews/${this.$page.review.path}` },
        { rel: 'canonical', href: `https://marks.reviews/${this.$page.review.path}` },
      ],
    }
  },
  components: {
    StarRating: () => import('vue-star-rating'),
    ReviewMiniLink,
  },
  data() {
    return {
      stars: 0,
    }
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
