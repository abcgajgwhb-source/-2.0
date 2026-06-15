<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
  <Toast :message="toastMessage" :show="toastVisible" />
</template>

<script setup>
import { provide, ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Toast from './components/Toast.vue'

const toastVisible = ref(false)
const toastMessage = ref('复制成功，去 Figma 中使用')
let timer = 0

function showToast(message = '复制成功，去 Figma 中使用') {
  toastMessage.value = message
  toastVisible.value = true
  clearTimeout(timer)
  timer = window.setTimeout(() => {
    toastVisible.value = false
  }, 1800)
}

provide('showToast', showToast)
</script>
