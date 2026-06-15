<template>
  <article class="font-card">
    <div class="font-card-head">
      <h2>{{ font.name }}</h2>
      <div class="figma-line">
        <span>Figma 中名称：{{ font.figmaName }}</span>
        <button type="button" class="copy-button" aria-label="复制 Figma 字体名称" @click="copyName">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 8h10v12H8z" />
            <path d="M6 16H4V4h12v2" />
          </svg>
        </button>
      </div>
    </div>

    <p class="preview-text" :style="{ fontFamily: previewFamily }">{{ font.previewText }}</p>

    <a
      v-if="font.officialUrl"
      class="official-link"
      :href="font.officialUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      前往官网下载字体
    </a>
    <button v-else class="official-link official-link-disabled" type="button" aria-disabled="true">
      前往官网下载字体
    </button>
  </article>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  font: {
    type: Object,
    required: true,
  },
})

const showToast = inject('showToast', () => {})

const previewFamily = computed(() => {
  const figmaName = props.font.figmaName?.replace(/"/g, '')
  return figmaName ? `"${figmaName}", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` : undefined
})

async function copyName() {
  await navigator.clipboard.writeText(props.font.figmaName)
  showToast('复制成功，去 Figma 中使用')
}
</script>
