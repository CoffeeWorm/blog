<template>
  <div>
    <div class="g-nav">
      <Navigator :navList="navList"></Navigator>
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
                <img class="avatar_img" :src="personalInfo.avatar" alt>
              </div>
            </div>
            <div class="content">
              <p class="name">{{personalInfo.name}}</p>
              <p class="location">
                <i class="fa fa-map-marker"></i>
                {{personalInfo.city}}
              </p>
              <p class="profession">{{personalInfo.profession}}</p>
              <p class="intro">{{personalInfo.intro}}</p>
            </div>
            <div class="status"></div>
          </template>
        </ToggleBox>

        <ToggleBox class="intro-box rec_article">
          <p slot="title">
            <i class="fa fa-list"></i> 置顶文章
          </p>
          <template slot="content">
            <ul>
              <li class="recommend f-oh" v-for="rec in recList" :key="rec.title">
                <a :href="rec.src">{{rec.title}}</a>
              </li>
            </ul>
          </template>
        </ToggleBox>

        <ToggleBox class="intro-box rec_album">
          <p slot="title">
            <i class="fa fa-camera"></i> 相册照片
          </p>
          <template slot="content">
            <Banner class="banner" :imgList="imgList"></Banner>
          </template>
        </ToggleBox>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navigator from "./components/navigator";
import Footer from "./components/footer";
import { navList } from "./router/config";
import ToggleBox from "@/components/togglebox";
import Banner from "@/components/banner";
import cache from "./components/cache";
export default {
  name: "App",
  components: { Navigator, Footer, ToggleBox, Banner },
  mounted() {
    cache.get("/api/user/info").then(res => {
      this.personalInfo = res;
    });
    cache
      .get("/api/photo/getList", {
        params: {
          page: 1,
          pageSize: 5,
          isTop: true
        }
      })
      .then(res => {
        this.imgList = res;
      });
  },
  data: () => {
    return {
      title: "This is title",
      personalInfo: {},
      navList: navList,
      recList: [
        {
          title: "Git命令速查表",
          src: ""
        },
        {
          title: "Git版本回退详解",
          src: ""
        },
        {
          title: "RegExp正则表达式速查表",
          src: ""
        }
      ],
      imgList: []
    };
  },
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
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
}
.personalintro .content .profession {
  line-height: 2;
  font-size: 16px;
  color: #666;
}
.personalintro .content .location {
  line-height: 1.4;
  font-size: 14px;
  color: #999;
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
  /* list-style-type: decimal; */
}
.rec_article .recommend a {
  color: #333;
}
.rec_album .content .banner {
  width: 270px;
  height: 150px;
}
.rec_album .content .banner .left,
.rec_album .content .banner .right {
  font-size: 30px;
}
.rec_album .content .banner .pointers {
  font-size: 12px;
}
</style>
