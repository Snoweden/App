import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps';


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAWWF1R-Hmbz13viqaccbTK3bif3Lmuq2E',
    libraries: 'places'
  }
});

// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted(el) {
    // Focus the element
    el.focus();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
