import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CategoryPage from '../views/CategoryPage.vue'
import SearchPage from '../views/SearchPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/common', name: 'common', component: Home },
  { path: '/chinese/:subCategory?', name: 'chinese', component: CategoryPage, props: route => ({ category: 'chinese', subCategory: route.params.subCategory || 'all' }) },
  { path: '/english/:subCategory?', name: 'english', component: CategoryPage, props: route => ({ category: 'english', subCategory: route.params.subCategory || 'all' }) },
  { path: '/number', name: 'number', component: CategoryPage, props: { category: 'number', subCategory: 'all' } },
  { path: '/multilingual/:subCategory?', name: 'multilingual', component: CategoryPage, props: route => ({ category: 'multilingual', subCategory: route.params.subCategory || 'all' }) },
  { path: '/search', name: 'search', component: SearchPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
