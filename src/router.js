import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Resorts from './components/resorts/Resorts';
import About from './components/About';
import Login from './components/Login';
import ResortDetail from './components/resorts/ResortDetail';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/resorts', component: Resorts },
    { path: '/resorts/:id', component: ResortDetail },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '*', redirect: '/' }
  ]
});