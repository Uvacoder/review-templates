<template>
  <div class="max-w-3xl px-4 py-12 mx-auto space-y-8 sm:px-6 lg:px-8">
    <header class="space-y-4 text-center">
      <g-link to="/" class="text-2xl font-bold text-center uppercase">
        Welcome to Marks Reviews
      </g-link>

      <nav class="space-x-4">
        <g-link to="/" class="underline">Home</g-link>
        <g-link to="/about/" class="underline">About</g-link>
        <g-link to="/reviews/" class="underline">Reviews</g-link>
      </nav>
    </header>

    <marquee class="py-2 text-sm uppercase bg-pink-500">
      New reviews added every week, check back often to see the latest Marks Reviews
    </marquee>

    <main>
      <slot />
    </main>

    <footer class="p-2 text-center bg-gray-100">
      <nav class="space-x-4">
        <g-link to="/rss.xml" class="underline">RSS</g-link>
        <g-link to="/sitemap.xml" class="underline">Sitemap</g-link>
      </nav>
    </footer>
  </div>
</template>
