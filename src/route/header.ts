import { RouteRecordRaw } from 'vue-router'

const HEADER_GROUP = {
    header: () => import('../components/common/header.vue')
}

export const header: Array<RouteRecordRaw> = [
    {
        path: "/",
        // redirect: '/bottom',
        name: "page",
        meta: {
            isLogin: false
        },
        component: HEADER_GROUP.header
    }
];