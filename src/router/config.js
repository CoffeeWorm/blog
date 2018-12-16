import album from '@/components/album';
import articleList from '@/components/articleList';
import resume from '@/components/resume';
import notFound from '@/components/404';
import management from '@/components/management';

const routes = [{
  path: '/album',
  name: '我的相册',
  component: album
}, {
  path: '/articleList',
  name: '我的日志',
  component: articleList
}, {
  path: '/management',
  name: '管理中心',
  component: management
}, {
  path: '/404',
  name: '404',
  component: notFound
}, {
  path: '/',
  redirect: '/album'
}];
const navList = [{
  path: '/album',
  name: '我的相册',
  component: album
}, {
  path: '/articleList',
  name: '我的日志',
  component: articleList
}, {
  path: '/management',
  name: '管理中心',
  component: management
}];
export { navList, routes };