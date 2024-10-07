import Vue from 'vue';
import VueRouter, {createRouter, createWebHistory} from 'vue-router';
import HeroDetails from '../views/HeroDetails.vue';
import prova from "@/views/prova.vue";

Vue.use(VueRouter);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'prova',
            component: prova
        },
        {
            path: '/hero/:key',
            name: 'HeroDetails',
            component: HeroDetails,
            props: true
        },
    ]
})


export default router;
