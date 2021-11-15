import Vue from 'vue'
import VueRouter from 'vue-router'
import Ingredient from '@/components/ingredient'

Vue.use(VueRouter)

const routes = [{
    path: '/ingredientes/lista',
    name: 'ingredient',
    component: Ingredient
}, ]

const router = new VueRouter({
    routes: routes,
    mode: 'history',
})
export default router