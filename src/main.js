import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './router/index.js';
import VueResource from 'vue-resource';
import { apiMixin} from "./helperScripts/api";

export const BASE_URL = 'http://deeaarbee.tech/lubdub/api';
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes
});



new Vue({
  el: '#app',
  router,
  mixin:[apiMixin],
  render: h => h(App)
});
