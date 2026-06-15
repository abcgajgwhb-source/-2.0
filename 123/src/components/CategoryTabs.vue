<template>
  <nav v-if="tabs.length" class="category-tabs" aria-label="字体分类">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.value"
      :to="tab.route"
      :class="{ active: tab.value === active }"
    >
      {{ tab.label }}
    </RouterLink>
  </nav>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
  active: {
    type: String,
    default: 'all',
  },
})
</script>
