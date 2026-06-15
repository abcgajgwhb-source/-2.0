<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink class="brand" to="/">Figma 免费商用字体速查库</RouterLink>

      <button class="menu-button" type="button" aria-label="展开导航" @click="menuOpen = !menuOpen">
        <span />
        <span />
      </button>

      <nav class="nav-list" :class="{ open: menuOpen }">
        <RouterLink
          v-for="item in navItems"
          :key="item.route"
          :to="item.route"
          :class="{ active: isActive(item) }"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <RouterLink class="search-link" to="/search" aria-label="搜索字体">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
        </svg>
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { navItems } from '../data/categories'

const route = useRoute()
const menuOpen = ref(false)

function isActive(item) {
  return item.match.some(path => (path === '/' ? route.path === '/' : route.path.startsWith(path)))
}
</script>
