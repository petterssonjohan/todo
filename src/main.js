import CxltToastr from 'cxlt-vue2-toastr';
import Vue from 'vue';
import App from './components/app/app.vue';
import 'todomvc-app-css/index.css';

/* This is now a Global Component and can be used in .vue files without importing them there. */
const toastrConfigs = {
  position: 'top right',
  showDuration: 1000,
  hideDuration: 2500
};
Vue.use(CxltToastr, toastrConfigs);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('app-root');
