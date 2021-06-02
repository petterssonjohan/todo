import CxltToastr from 'cxlt-vue2-toastr';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app/app.vue';
import 'todomvc-app-css/index.css';
import { createStore } from './store/index';

/* This is now a Global Component and can be used in .vue files without importing them there. */
const toastrConfigs = {
  position: 'top right',
  showDuration: 1000,
  hideDuration: 2500
};

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(CxltToastr, toastrConfigs);

new Vue({
  store: createStore(),
  render: h => h(App)
}).$mount('app-root');
