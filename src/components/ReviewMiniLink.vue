<template>
  <g-link
    :to="path"
    class="relative block font-mono text-sm font-bold tracking-widest uppercase group dark:text-black"
  >
    <span
      class="absolute inset-0 transition-transform transform bg-yellow-200 -rotate-2 group-hover:scale-y-125 group-hover:scale-x-110"
    />

    <span class="relative">
      {{ title }}
    </span>
  </g-link>
</template>

<script>
export default {
  props: {
    title: String,
    path: String,
  },
}
</script>
