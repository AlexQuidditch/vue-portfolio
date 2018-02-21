import Vue from 'vue';

import App from './App';
import router from './router';

import Resource from 'vue-resource';
import VueSweetalert from 'vue-sweetalert';

Vue.use(Resource);
Vue.use(VueSweetalert);

Vue.config.productionTip = false;

const app = new Vue({
	router ,
  template: '<App/>',
  components: { App }
}).$mount('#wrapper');
