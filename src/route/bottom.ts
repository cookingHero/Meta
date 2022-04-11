import { RouteRecordRaw } from 'vue-router'

const BOTTOM_GROUP = {
    bottom: () => import('../components/common/bottom.vue')
}

export const bottom: Array<RouteRecordRaw> = [
    {
        path: '/bottom',
        name: 'bottom',
        component: BOTTOM_GROUP.bottom
    }
]