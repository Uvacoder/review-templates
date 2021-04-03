<template>
  <Layout>
    <section>
      <div class="container py-16">
        <div class="space-y-8 max-w-prose">
          <h1 class="text-6xl font-extrabold uppercase sm:text-7xl">
            No faff <br />
            reviews
          </h1>

          <div>
            <p>
              Here I review things that may interest you. If they've interested me they will be rated highly, if not,
              then they won't. If any of these reviews upset you, then just know I do not take this website seriously
              and neither should you.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <ReviewCard
          v-for="review in $page.reviews.edges"
          :title="review.node.title"
          :path="review.node.path"
          :date="review.node.date"
          :key="review.path"
        />
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    reviews: allReview(sortBy: "date", order: DESC) {
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
  data() {
    return {
      seoDescripton: 'Here I write reviews on things, if they help you then great, if not then oh well.',
      seoTitle: 'No Faff Reviews',
      seoUrl: 'https://marks.reviews/',
    }
  },
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
        { name: 'twitter:site', content: this.seoUrl },
        { name: 'twitter:title', content: this.seoTitle },
        { property: 'og:description', content: this.seoDescripton },
        { property: 'og:site_name', content: 'Marks Reviews' },
        { property: 'og:title', content: this.seoTitle },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.seoUrl },
        { rel: 'canonical', href: this.seoUrl },
      ],
    }
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: 'Home',
        page_path: '/',
      })
    },
  },
  components: {
    ReviewCard,
  },
}
</script>
