<template>
  <div>
    <header class="border-b border-black">
      <div class="items-center pt-4 space-y-4 sm:flex sm:h-24 sm:pl-8 sm:space-y-0 sm:pt-0">
        <div class="flex-1 text-center sm:text-left">
          <g-link to="/" class="font-mono text-xl font-bold tracking-widest uppercase"> ⭐️ Marks Reviews </g-link>
        </div>

        <div class="space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          <nav class="flex items-center justify-center space-x-8 sm:justify-end">
            <g-link to="/" class="font-mono font-bold tracking-widest uppercase"> Home </g-link>
            <g-link to="/about/" class="font-mono font-bold tracking-widest uppercase"> About </g-link>
            <g-link to="/reviews/" class="font-mono font-bold tracking-widest uppercase"> Reviews </g-link>
          </nav>

          <div class="relative" v-click-outside="hide">
            <div class="flex items-center justify-center p-8 border-t border-black sm:h-24 sm:border-t-0 sm:border-l">
              <button v-on:click="search = !search" class="font-mono font-bold tracking-widest uppercase">
                🕵️‍♀️ Search 🕵️
              </button>
            </div>

            <div
              v-if="search"
              class="absolute right-0 top-auto z-10 w-screen max-w-3xl p-8 bg-white border-t border-b border-black sm:border-l sm:border-r"
            >
              <Search />
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <div class="container py-16">
        <nav class="flex items-center space-x-8">
          <a href="/rss.xml" class="font-mono font-bold tracking-widest uppercase"> RSS </a>
          <a href="/sitemap.xml" class="font-mono font-bold tracking-widest uppercase"> Sitemap </a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import Search from '@/components/Search'

export default {
  metaInfo() {
    return {
      title: 'No Faff Reviews',
      titleTemplate: '%s | Marks Reviews',
      meta: [
        { name: 'description', content: 'Get simple, no faff reviews about a wide variety of things.' },
        { charset: 'utf-8' },
        { rel: 'canonical', href: this.location },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'No Faff Reviews | Marks Reviews' },
        { name: 'twitter:site', content: this.location },
        { name: 'twitter:description', content: 'Get simple, no faff reviews about a wide variety of things.' },
        { name: 'twitter:image:src', content: this.logo },
        { name: 'twitter:creator', content: '@itsmarkmead' },
        { property: 'og:title', content: 'No Faff Reviews | Marks Reviews' },
        { property: 'og:site_name', content: 'Marks Reviews' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: this.logo },
        { property: 'og:description', content: 'Get simple, no faff reviews about a wide variety of things.' },
        { property: 'og:url', content: this.location },
        { itemprop: 'name', content: 'No Faff Reviews | Marks Reviews' },
        { itemprop: 'description', content: 'Get simple, no faff reviews about a wide variety of things.' },
        { itemprop: 'image', content: this.logo },
        { name: 'robots', content: 'index' },
      ],
    }
  },
  data() {
    const root = 'https://marks.reviews'

    return {
      search: false,
      location: '',
      logo: `${root}${require('~/assets/star.png')}`,
    }
  },
  components: {
    Search,
  },
  methods: {
    toggle() {
      this.search = !this.search
    },
    hide() {
      this.search = false
    },
  },
  mounted() {
    this.location = window.location.href
  },
}
</script>
