import Vue from 'vue';
import Router from 'vue-router';
import event from '@/components/event.js';
import { routes } from './config';


Vue.use(Router);
let router = new Router({routes});

router.beforeEach((to, from, next) => {
  //严格限制权限
  let obj = routes.find((item) => {
    return item.path === to.path;
  });
  if (!obj) {
    next('/404');
  }
  next();
});

router.afterEach((to, from) => {
  event.$emit('routerupdate', to.path);
});
export default router;
