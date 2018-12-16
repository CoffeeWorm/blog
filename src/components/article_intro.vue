<template>
  <div class="m-article f-cf">
    <p class="title">
      <a :href="path" target="_self">
        <span class="top" v-show="isAd">[推广]</span>
        <span class="top" v-show="isTop">[顶]</span>
        {{title}}
      </a>
    </p>
    <p class="intro">
      {{intro}}
      <a class="more" href="#" target="_self">More...</a>
    </p>
    <div class="info">
      <span class="time">{{createTime|time}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'intro', 'createTime', 'views', 'id', 'isTop', 'isAd', 'path']
};
</script>

<style scoped>
.m-article {
  padding: 5px 15px;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(50, 50, 50, 0.3);
  border-radius: 3px;
  text-align: left;
}

.m-article .title {
  font-size: 18px;
  font-weight: bold;
  line-height: 2.5;
  cursor: pointer;
}
.m-article .title a {
  color: #333;
}
.m-article .title a:hover {
  color: rgb(255, 133, 0);
}
.m-article .title .top {
  font-size: 18px;
  color: red;
}
.m-article .intro {
  font-size: 16px;
  text-indent: 2em;
  line-height: 1.4;
}
.m-article .intro .more{
  font-size: 14px;
}
.m-article .info {
  float: right;
  font-size: 14px;
  color: #666;
}
.m-article .info span {
  margin-left: 20px;
}
</style>
