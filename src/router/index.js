import Vue from 'vue';
import Router from 'vue-router';
import Base from '../components/views/base/index.vue';

import VDele from '../components/views/v-dele/index.vue';
import TravelApp from '../components/views/travel-app/index.vue';
import VseProsto from '../components/views/vse-prosto/index.vue';

Vue.use( Router );

export default new Router({
  mode: 'history',
  base: __dirname,
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
      path: '*',
      redirect: '/vdele'
    }
  ]
});
