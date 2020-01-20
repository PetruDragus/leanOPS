import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../components/views/home'
import Page from '../components/views/page'

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/page',
            component: Page
        },
    ]
});

export default router