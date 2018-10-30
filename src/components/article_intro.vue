<template>
  <div class="m-article f-cf">
    <p class="title">
      <a :href="url+id" target="_blank">
        <span class="top" v-show="top">[顶]</span>
        {{title}}
      </a>
    </p>
    <p class="intro">
      {{intro}}
      <a class="more" href="#" target="_self">更多...</a>
    </p>
    <div class="info">
      <span class="auther">作者：{{auther}}</span>
      <span class="time">{{pubTime|time}}</span>
      <span class="readers">阅读数：{{readers}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'intro', 'auther', 'pubTime', 'readers', 'id', 'url', 'top']
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
.m-article .info {
  float: right;
  font-size: 14px;
  color: #666;
}
.m-article .info span {
  margin-left: 20px;
}
</style>
