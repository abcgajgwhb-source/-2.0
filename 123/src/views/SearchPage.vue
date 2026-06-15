<template>
  <div class="search-page page-shell">
    <section class="search-hero">
      <h1>搜索</h1>
      <p>浏览、搜索，或者偶然发现意想不到的惊喜。每款字体都经过精心收集！</p>
    </section>

    <SearchInput :keyword="keyword" @search="search" @clear="clear" />

    <template v-if="keyword">
      <div class="result-bar">
        <span>搜索结果</span>
        <small>搜索“{{ keyword }}”找到{{ results.length }}个结果</small>
      </div>
      <FontGrid v-if="results.length" :fonts="results" label="搜索结果" />
      <EmptyState v-else />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import fonts from '../data/fonts.json'
import SearchInput from '../components/SearchInput.vue'
import FontGrid from '../components/FontGrid.vue'
import EmptyState from '../components/EmptyState.vue'

const route = useRoute()
const router = useRouter()

const keyword = computed(() => String(route.query.keyword || '').trim())

const results = computed(() => {
  const term = keyword.value.toLowerCase()
  if (!term) {
    return []
  }
  return fonts.filter(font => {
    const haystack = [
      font.name,
      font.figmaName,
      font.category,
      font.subCategory,
      ...(font.tags || []),
    ].join(' ').toLowerCase()
    return haystack.includes(term)
  })
})

function search(value) {
  const next = value.trim()
  router.push(next ? { path: '/search', query: { keyword: next } } : { path: '/search' })
}

function clear() {
  router.push('/search')
}
</script>
