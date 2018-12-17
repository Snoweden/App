import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Resorts from './components/Resorts';
import About from './components/About';
import Login from './components/Login';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/resorts', component: Resorts },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '*', redirect: '/' }
  ]
});