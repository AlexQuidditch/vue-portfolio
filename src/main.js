// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

import Resource from 'vue-resource';

Vue.use(Resource);

Vue.config.productionTip = false;
Vue.config.performance = true;

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const app = new Vue({
	router , store,
  template: '<App/>',
  components: { App }
}).$mount('#wrapper')
