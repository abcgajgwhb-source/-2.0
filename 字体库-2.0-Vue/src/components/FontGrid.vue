<template>
  <section class="font-grid" :aria-label="label">
    <FontCard v-for="font in fonts" :key="font.id" :font="font" />
  </section>
</template>

<script setup>
import FontCard from './FontCard.vue'

defineProps({
  fonts: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: '字体列表',
  },
})
</script>
