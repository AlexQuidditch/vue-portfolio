import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Base from '../components/views/base/index.vue';

import MPU from '../components/views/mpu/index.vue';
import VDele from '../components/views/v-dele/index.vue';
import TravelApp from '../components/views/travel-app/index.vue';

import About from '../components/views/about/index.vue';
import Contact from '../components/views/contact/index.vue';

const router = new Router({
  mode: 'history',
  linkExactActiveClass: '_exact-active',
  linkActiveClass: '_active',
  scrollBehavior (to, from, savedPosition) {
    return window.scroll({ top: 0, behavior: 'smooth' })
  },
  routes: [
    {
      path: '/:Case',
      name: 'Base',
      component: Base,
      props: true,
      meta: {
        title: 'Сергей Иванов WEB | / APP / UI DESIGN',
        metaTags: [{
          name: 'description',
          content: 'Сергей Иванов WEB | WEB / APP / UI DESIGN'
        }]
      }
    },
    {
      path: '/case/v-dele',
      name: 'VDele',
      component: VDele,
      meta: {
        title: 'Кейс - Время Пришло',
        metaTags: [{
          name: 'description',
          content: 'Разработка интерфейса студенческой фриланс - биржи "Время Пришло"'
        }]
      }
    },
    {
      path: '/case/travel-app',
      name: 'TravelApp',
      component: TravelApp,
      meta: {
        title: 'Кейс - Travel.App',
        metaTags: [{
          name: 'description',
          content: 'Веб-сервис и приложение геолокации, отличительной особенностью которого являются 3D - карты реального времени.'
        }]
      }
    },
    {
      path: '/case/mpu',
      name: 'MPU',
      component: MPU,
      meta: {
        title: 'Кейс - MPU Leicht',
        metaTags: [{
          name: 'description',
          content: 'Разработка дизайна сайта и веб - приложения MPU Leicht'
        }]
      }
    },
    {
      path: '/about/me',
      name: 'About',
      component: About,
      meta: {
        title: 'Обо мне || Портфолио',
        metaTags: [{
          name: 'description',
          content: 'Привет! Я занимаюсь дизайном сайтов, веб-сервисов и приложений, делая их привлекательнее для Ваших клиентов. Популизирую положительный имидж компании, увеличиваю прибыль.'
        }]
      }
    },
    {
      path: '/contact/me',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Напишите мне || Портфолио',
        metaTags: [{
          name: 'description',
          content: 'Напишите мне и мы детально обсудим Ваше предложение'
        }]
      }
    },
    {
      path: '/*',
      redirect: '/mpu'
    }
  ]
});

// This callback runs before every route change, including on page load.
router.beforeEach( ( to , from , next ) => {
  const nearestWithTitle = to.matched.slice().reverse().find( r => r.meta && r.meta.title );
  const nearestWithMeta = to.matched.slice().reverse().find( r => r.meta && r.meta.metaTags );
  const previousNearestWithMeta = from.matched.slice().reverse().find( r => r.meta && r.meta.metaTags );

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from( document.querySelectorAll('[data-vue-router-controlled]')).map( el => el.parentNode.removeChild(el) );

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map( tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach( key => tag.setAttribute(key, tagDef[key]) );
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
    // Add the meta tags to the document head.
    .forEach( tag => document.head.appendChild(tag) );

  next();
});

export default router;