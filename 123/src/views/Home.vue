<template>
  <div class="page-shell">
    <CategoryTabs :tabs="meta.tabs" :active="activeType" />
    <HeroBanner />
    <FontGrid :fonts="visibleFonts" label="常用字体" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import fonts from '../data/fonts.json'
import { categoryMeta } from '../data/categories'
import CategoryTabs from '../components/CategoryTabs.vue'
import FontGrid from '../components/FontGrid.vue'
import HeroBanner from '../components/HeroBanner.vue'

const route = useRoute()
const meta = categoryMeta.common

const activeType = computed(() => route.query.type || 'all')

const visibleFonts = computed(() => {
  const type = activeType.value
  if (type === 'all') {
    return fonts.filter(font => font.category === 'common').slice(0, 48)
  }
  return fonts.filter(font => font.category === type || font.routes?.includes(`common:${type}`)).slice(0, 48)
})
</script>
