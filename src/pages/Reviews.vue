<template>
  <Layout>
    <header>
      <div class="container py-16">
        <h1 class="text-6xl font-extrabold uppercase sm:text-7xl">
          {{ searchReviews.length }} No faff <br />
          {{ 'review' | pluralize(searchReviews.length) }}
        </h1>
      </div>
    </header>

    <section>
      <div
        v-if="searchReviews.length > 0"
        class="container grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ReviewCard
          v-for="review in searchReviews"
          :title="review.node.title"
          :path="review.node.path"
          :date="review.node.date"
          :key="review.path"
        />
      </div>

      <div v-else class="container">
        <h2 class="text-3xl font-extrabold uppercase sm:text-4xl">
          😢 No results, try again 😢
        </h2>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    reviews: allReview(sortBy: "title", order: ASC) {
      edges {
        node {
          title
          path
          date
        }
      }
    }
  }
</page-query>

<script>
import ReviewCard from '@/components/ReviewCard'

export default {
  metaInfo() {
    return {
      title: this.seoTitle,
      meta: [
        { itemprop: 'description', content: this.seoDescripton },
        { itemprop: 'name', content: this.seoTitle },
        { name: 'author', content: 'Mark' },
        { name: 'description', content: this.seoDescripton },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@itsmarkmead' },
        { name: 'twitter:description', content: this.seoDescripton },
        { name: 'twitter:image:src', content: '' },
        { name: 'twitter:site', content: this.seoUrl },
        { name: 'twitter:title', content: this.seoTitle },
        { property: 'og:description', content: this.seoDescripton },
        { property: 'og:image', content: '' },
        { property: 'og:site_name', content: 'Marks Reviews' },
        { property: 'og:title', content: this.seoTitle },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.seoUrl },
        { rel: 'canonical', href: this.seoUrl },
      ],
    }
  },
  data() {
    return {
      seoDescripton: 'Here are all my no faff reviews about things that I enjoy or dislike.',
      seoTitle: 'No Faff Reviews',
      seoUrl: 'https://marks.reviews/reviews/',
      reviews: [],
      search: '',
    }
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: 'Reviews',
        page_path: '/reviews/',
      })
    },
  },
  computed: {
    searchReviews() {
      if (!this.search) return this.reviews

      return this.reviews.filter((review) => {
        return review.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
      })
    },
  },
  mounted() {
    const url = new URL(window.location)

    this.search = url.searchParams.get('q')
    this.reviews = this.$page.reviews.edges
  },
  components: {
    ReviewCard,
  },
}
</script>
