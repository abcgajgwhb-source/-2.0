<template>
  <div class="page-shell">
    <CategoryTabs :tabs="meta.tabs" :active="activeSubCategory" />
    <HeroBanner />
    <FontGrid :fonts="visibleFonts" :label="meta.title" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import fonts from '../data/fonts.json'
import { categoryMeta } from '../data/categories'
import CategoryTabs from '../components/CategoryTabs.vue'
import FontGrid from '../components/FontGrid.vue'
import HeroBanner from '../components/HeroBanner.vue'

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    default: 'all',
  },
})

const meta = computed(() => categoryMeta[props.category])
const activeSubCategory = computed(() => props.subCategory || 'all')

const visibleFonts = computed(() => {
  const category = props.category
  const sub = activeSubCategory.value
  return fonts.filter(font => {
    if (font.category !== category && !font.routes?.some(route => route.startsWith(`${category}:`))) {
      return false
    }
    if (sub === 'all') {
      return true
    }
    return font.subCategory === sub || font.routes?.includes(`${category}:${sub}`)
  })
})
</script>
