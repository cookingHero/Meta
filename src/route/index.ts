import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routePath: RouteRecordRaw[] = []

const route = createRouter({
    history: createWebHistory(),
    routes: routePath
})

export default route