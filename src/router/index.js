import Vue from 'vue';
import Router from 'vue-router';
import Base from '../components/views/base/index.vue';

import VDele from '../components/views/v-dele/index.vue';
import TravelApp from '../components/views/travel-app/index.vue';
import VseProsto from '../components/views/vse-prosto/index.vue';
import About from '../components/views/about/index.vue';
import Contact from '../components/views/contact/index.vue';

Vue.use( Router );

export default new Router({
  mode: 'history',
  base: __dirname,
  linkExactActiveClass: '_exact-active',
  linkActiveClass: '_active',
  routes: [
    {
      path: '/:Case',
      name: 'Base',
      component: Base,
      props: true
    },
    {
      path: '/case/v-dele',
      name: 'VDele',
      component: VDele
    },
    {
      path: '/case/travel-app',
      name: 'TravelApp',
      component: TravelApp
    },
    {
      path: '/case/vse-prosto',
      name: 'VseProsto',
      component: VseProsto
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/vdele'
    }
  ]
});
