import VueRouter from 'vue-router';
import { routes } from './routes';

const router = new VueRouter({
  mode: 'history',
  base: '04-SPA/01-ContentTabs',
  linkActiveClass: 'content-tabs__tab_active',
  routes,
});

export default router;
