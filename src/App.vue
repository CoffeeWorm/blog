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
        <ToggleBox class="intro-box personalintro" :showTitle="!1" :toggleFunc="!1">
          <template slot="content">
            <div class="face f-cb">
              <div class="avatar">
                <img class="avatar_img" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1197039898,3476709019&fm=179&app=42&f=JPEG?w=121&h=140" alt="">
              </div>
            </div>
            <div class="content">
              <p class="name">Coffee_Worm</p>
              <p class="profession">web前端工程师</p>
              <p class="intro">坐标杭州滨江，即将从计算机科学与技术专业毕业，初入IT行业，从事web前端开发工作。</p>
            </div>
            <div class="status"></div>
          </template>
        </ToggleBox>

        <ToggleBox class="intro-box rec_article">
          <p slot="title"><i class="fa fa-list"></i> 置顶文章</p>
          <template slot="content">
            <ol>
              <li class="recommend f-oh" v-for="rec in recList" :key="rec.title">
                <a :href="rec.src">{{rec.title}}</a>
              </li>
            </ol>
          </template>
        </ToggleBox>

        <ToggleBox class="intro-box rec_article">
          <p slot="title"><i class="fa fa-camera"></i> 相册照片</p>
          <template slot="comnten">
            <ol>
              <li class="recommend f-oh" v-for="rec in recList" :key="rec.title">
                <a :href="rec.src">{{rec.title}}</a>
              </li>
            </ol>
          </template>
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
import ToggleBox from '@/components/togglebox';

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
        { link: '/management', name: '管理中心' }
      ],
      recList: [
        {
          title: 'Git命令速查表',
          src: ''
        },
        {
          title: 'Git版本回退详解',
          src: ''
        },
        {
          title: 'RegExp正则表达式速查表',
          src: ''
        }
      ]
    };
  },
  router
};
</script>

<style>
.g-nav {
  background-color: #fff;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.2);
}
.intro-box {
  margin-bottom: 20px;
}
.intro-box .title {
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
}
.personalintro .face {
  margin: 20px auto;
  text-align: center;
}
.personalintro .face .avatar {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
}
.personalintro .face .avatar_img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 500ms;
}
.personalintro:hover .avatar_img {
  transform: translate(-50%, -50%) scale(1.1, 1.1);
}
.personalintro .content {
  text-align: center;
}
.personalintro .content .name {
  font-size: 20px;
  font-weight: bold;
}
.personalintro .content .profession {
  line-height: 3;
  font-size: 16px;
  color: #666;
}
.personalintro .content .intro {
  padding: 0 20px;
  color: #999;
  font-size: 14px;
  text-align: left;
  text-indent: 2em;
}
.rec_article .recommend {
  width: 100%;
  line-height: 1.5;
  padding-left: 3px;
  list-style-position: inside;
  list-style-type: decimal;
}
.rec_article .recommend a {
  color: #333;
}
</style>
