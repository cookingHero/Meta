import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { header } from './header'
import { bottom } from './bottom'

const routePath = [
    ...header,
    ...bottom
]

const router = createRouter({
    history: createWebHistory(),
    routes: routePath
})

router.beforeEach((to, from) => {
    if (to.meta.isLogin) {
        console.log('this need check login')
    }
})

export default router