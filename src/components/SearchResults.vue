<template>
  <div class="flow-root">
    <ul class="flex flex-wrap -mx-2 -my-1 list-none">
      <li v-for="review in reviews" :key="review.node.id" class="px-2 py-1">
        <ReviewMiniLink :title="review.node.title" :path="review.node.path" />
      </li>
    </ul>
  </div>
</template>

<script>
import ReviewMiniLink from '@/components/ReviewMiniLink'

export default {
  props: {
    reviews: Array,
  },
  components: {
    ReviewMiniLink,
  },
}
</script>
