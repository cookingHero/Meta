import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const commonIns = () => import('../components/common/index.vue')

const routePath: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "page",
        component: commonIns,
    },
    {
        path: "/nav",
        name: "nav",
        component: commonIns
    }
];

const route = createRouter({
    history: createWebHistory(),
    routes: routePath
})

export default route