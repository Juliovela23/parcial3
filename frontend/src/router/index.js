import Vue from 'vue'
import VueRouter from 'vue-router'

import AddMenu from '@/components/AddMenu'

Vue.use(VueRouter)


const routes = [{
    path: '/Menu/add',
    name: 'addMenu',
    component: AddMenu
}, ]

const router = new VueRouter({
    routes: routes,
    mode: 'history',
})
export default router