import { createRouter, createWebHistory } from 'vue-router';
import HeroDetails from '../views/HeroDetails.vue';
import HeroesList from "../views/HeroesList.vue";
import Menu from "../views/Menu.vue";
import MapsList from "../views/MapsList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu
    },
    {
      path: '/heroes',
      name: 'HeroesList',
      component: HeroesList
    },
    {
      path: '/heroes/:key',
      name: 'HeroDetails',
      component: HeroDetails,
      props: true
    },
    {
      path: '/maps',
      name: 'MapsList',
      component: MapsList
    },
  ]
});

export default router;
