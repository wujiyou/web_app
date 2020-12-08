import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/home'
import list from '@/pages/list/list'
import shopcar from '@/pages/shopcar/shopcar'
import user from '@/pages/user/user'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: home
    },
    {
        path: '/list',
        component: list
    },
    {
        path: '/shopcar',
        component: shopcar
    },
    {
        path: '/user',
        component: user
    }
]

export default new VueRouter({
    routes
})