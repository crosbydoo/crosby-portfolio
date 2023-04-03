import {createRouter, createWebHistory} from "vue-router";

import MainPage from "../components/pages/Main.vue";

import notFound from "../components/notFound.vue";

const routes = [
    {
        path: '/',
        name: "Main",
        component: MainPage,
        alias: '/Beranda'
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: notFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router