// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.performance = true;

const app = new Vue({
  el: '#wrapper',
	router , store,
  template: '<App/>',
  components: { App }
})
