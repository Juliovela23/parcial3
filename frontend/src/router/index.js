import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddMenu from '@/components/AddMenu'
import Ingredient from '@/components/ingredient'

Vue.use(VueRouter)


const routes = [{
        path: '/Menu/add',
        name: 'addMenu',
        component: AddMenu
    }, {
        path: '/ingredientes/lista',
        name: 'Ingredient',
        component: Ingredient
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
]

const router = new VueRouter({
    routes: routes,
    mode: 'history',
})
export default router