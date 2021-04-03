<template>
  <div class="text-black bg-white dark:text-white dark:bg-black">
    <header class="border-b border-black dark:border-white">
      <div class="items-center pt-4 space-y-4 sm:flex sm:h-24 sm:pl-8 sm:space-y-0 sm:pt-0">
        <div class="flex-1 text-center sm:text-left">
          <g-link
            to="/"
            class="font-mono text-xl font-bold tracking-widest uppercase"
          >
            ⭐️ Marks Reviews
          </g-link>
        </div>

        <div class="space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          <nav class="flex items-center justify-center space-x-8 sm:justify-end">
            <g-link
              to="/"
              class="font-mono font-bold tracking-widest uppercase"
            >
              Home
            </g-link>
            <g-link
              to="/about/"
              class="font-mono font-bold tracking-widest uppercase"
            >
              About
            </g-link>
          </nav>

          <div
            v-click-outside="hide"
            class="relative"
          >
            <div
              class="flex items-center justify-center p-8 border-t border-black dark:border-white sm:h-24 sm:border-t-0 sm:border-l"
            >
              <button
                class="font-mono font-bold tracking-widest uppercase"
                @click="search = !search"
              >
                🕵️‍♀️ Search 🕵️
              </button>
            </div>

            <div
              v-if="search"
              class="absolute right-0 top-auto z-10 w-screen max-w-3xl p-8 bg-white border-t border-b border-black sm:border-l sm:border-r dark:bg-black dark:border-white"
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
          <a
            href="/rss.xml"
            class="font-mono font-bold tracking-widest uppercase"
          > RSS </a>
          <a
            href="/sitemap.xml"
            class="font-mono font-bold tracking-widest uppercase"
          > Sitemap </a>
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
      titleTemplate: '%s | Marks Reviews',
      meta: [{ charset: 'utf-8' }, { name: 'robots', content: 'index' }],
    }
  },
  components: {
    Search,
  },
  data() {
    return {
      search: false,
    }
  },
  methods: {
    toggle() {
      this.search = !this.search
    },
    hide() {
      this.search = false
    },
  },
}
</script>
