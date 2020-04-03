// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { store } from './store/store'
import axios from 'axios'
import Vuelidate from 'vuelidate';
import PortalVue from 'portal-vue'
import VModal from 'vue-js-modal'

Vue.use(VModal);
Vue.use(PortalVue);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://0.0.0.0:5000/api/';
if (sessionStorage.getItem('auth_token')){
 axios.defaults.headers.post['Authorization'] = 'Token ' + sessionStorage.getItem('auth_token');
 axios.defaults.headers.get['Authorization'] = 'Token ' + sessionStorage.getItem('auth_token');
 axios.defaults.headers.patch['Authorization'] = 'Token ' + sessionStorage.getItem('auth_token');
}
// router.beforeEach((to, from, next) =>{
//   console.log('Before each');
//   next()
// });



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
