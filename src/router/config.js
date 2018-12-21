import album from '@/pages/album';
import articleList from '@/pages/articleList';
import notFound from '@/pages/404';
import management from '@/pages/management';
import article from '@/pages/article';

const routes = [{
  path: '/album',
  name: 'album',
  component: album
}, {
  path: '/articleList',
  name: 'articleList',
  component: articleList
}, {
  path: '/management',
  name: 'management',
  component: management
}, {
  path: '/article',
  name: 'article',
  component: article
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
}, {
  path: '/articleList',
  name: '我的日志',
}, {
  path: '/management',
  name: '管理中心',
}];
export { navList, routes };