import Vue from 'vue';
import Router from 'vue-router';
import album from '@/components/album';
import article from '@/components/article';
import resume from '@/components/resume';
import notFound from '@/components/404';
import management from '@/components/management';
import event from '@/components/event.js';
import test from '@/components/banner';


Vue.use(Router);
let routes = [{
  path: '/',
  redirect: '/album'
}, {
  path: '/album',
  name: 'album',
  component: album
},
{
  path: '/article',
  name: 'article',
  component: article
},
{
  path: '/resume',
  name: 'resume',
  component: resume
},
{
  path: '/404',
  name: '404',
  component: notFound
},
{
  path: '/test',
  name: 'test',
  component: test
},
{
  path: '/management',
  name: 'management',
  component: management
}
]
let router = new Router({
  routes
});

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
