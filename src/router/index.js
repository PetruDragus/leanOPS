import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../views/home'
import Page from '../views/page'

const router = new VueRouter({
    mode: 'history',
    // hash: false,
    scrollBehavior: function(to) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
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