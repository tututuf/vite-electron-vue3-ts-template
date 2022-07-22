import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any = [
    { path: '/', component: () => import('@/view/Home/index.vue')}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router