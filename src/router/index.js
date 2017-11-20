import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Base from '@/components/views/base';

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
      path: '*',
      redirect: '/vdele'
    }
  ]
});
