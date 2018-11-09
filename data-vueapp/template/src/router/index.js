import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import HelloEarth from '@/components/HelloEarth'

Vue.use(Router)

var router = new Router({
    routes: [
    {
        name: 'HelloWorld',
        path: '/helloworld/:worldmsg',
        component: HelloWorld
    },
    {
        path: '/',
        component: index
    },
    {
        name: 'HelloEarth',
        path: '/helloearth/:earthmsg',
        component: HelloEarth
    }]
})

export default router