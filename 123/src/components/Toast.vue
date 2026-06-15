<template>
  <Transition name="toast">
    <div v-if="show" class="toast">{{ message }}</div>
  </Transition>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: '复制成功，去 Figma 中使用',
  },
  show: {
    type: Boolean,
    default: false,
  },
})
</script>
