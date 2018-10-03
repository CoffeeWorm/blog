<template>
  <div>
    <div class="g-nav">
      <Navigator :nav-list="navList"></Navigator>
    </div>
    <div class="g-content f-cf">
      <div class="g-main f-cf">
        <router-view></router-view>
      </div>
      <div class="g-siderbar">
        <ToggleBox :title="title">
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
          </ul>
        </ToggleBox>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navigator from './components/navigator';
import Footer from './components/footer';
import router from '@/router/router.js';
import ToggleBox from '@/components/test';

export default {
  name: 'App',
  components: { Navigator, Footer, ToggleBox },
  data: () => {
    return {
      title: 'This is title',
      navList: [
        { link: '/album', name: '我的相册' },
        { link: '/article', name: '我的日志' },
        { link: '/resume', name: '个人简介' },
        { link: '/more', name: '更多' }
      ]
    };
  },
  router
};
</script>

<style>
.g-nav {
  background-color: #fff;
  box-shadow: 0 3px 15px rgba(100, 100, 100, .2)
}
</style>
