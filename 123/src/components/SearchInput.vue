<template>
  <form class="search-input" @submit.prevent="submit">
    <input
      v-model.trim="localKeyword"
      type="search"
      placeholder="请输入要查询的字体"
      autocomplete="off"
      @keydown.enter.prevent="submit"
    />
    <button v-if="localKeyword" class="clear-button" type="button" aria-label="清空搜索" @click="clear">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m18 6-12 12M6 6l12 12" />
      </svg>
    </button>
    <button class="submit-button" type="submit">搜索</button>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  keyword: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['search', 'clear'])
const localKeyword = ref(props.keyword)

watch(() => props.keyword, value => {
  localKeyword.value = value
})

function submit() {
  emit('search', localKeyword.value)
}

function clear() {
  localKeyword.value = ''
  emit('clear')
}
</script>
