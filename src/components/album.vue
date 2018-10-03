<template>
  <div class="m-album f-cf">
    <div class="item f-lazy" v-for="item in albumList" :key="item.src">
      <img class="img" :data-src="item.src" :src="item.src">
    </div>
    <div class="item more" v-if="manager">
      <i class="u-icon u-icon-more" title="添加/删除"></i>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      manager: false,
      albumList: [
        {
          src: "https://dummyimage.com/439x439/c00/fff",
          intro: "this is a img",
          show: false
        },
        {
          src: "https://dummyimage.com/439x439/cc0/fff",
          intro: "this is a img",
          show: false
        },
        {
          src: "https://dummyimage.com/439x439/c0c/fff",
          intro: "this is a img",
          show: false
        },
        {
          src: "https://dummyimage.com/439x439/0c0/fff",
          intro: "this is a img",
          show: false
        },
        {
          src: "https://dummyimage.com/439x439/0cc/fff",
          intro: "this is a img",
          show: false
        },
        {
          src: "https://dummyimage.com/439x439/00c/fff",
          intro: "this is a img",
          show: false
        },
        
      ]
    };
  }
};
</script>

<style scoped>
.m-album {
  margin-left: -2px;
}
.m-album .item {
  position: relative;
  width: 439px;
  height: 439px;
  margin-left: 2px;
  margin-top: 2px;
  float: left;
  transition: background-color 300ms;
  cursor: pointer;
  overflow: hidden;
}
.m-album .item.more {
  background-color: rgba(0, 0, 0, 0.2);
}
.m-album .item.more .u-icon-more {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.m-album .item.more:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.m-album .item:hover .img {
  transform: translate3d(-50%, -50%, 0) scale3d(1.1, 1.1, 1);
}
.m-album .item .img {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 800px;
  transform: translate3d(-50%, -50%, 0);
  transition: all 300ms;
  display: block;
}
.u-icon {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.u-icon-more {
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  transition: border 300ms;
}
.u-icon-more:before,
.u-icon-more:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 2px;
  transition: background-color 300ms;
  background-color: #fff;
}
.u-icon-more:hover {
  border: 2px solid #333;
}
.u-icon-more:hover:before,
.u-icon-more:hover:after {
  background-color: #333;
}
.u-icon-more:before {
  transform: translate3d(-50%, -50%, 0) rotate(90deg);
}
.u-icon-more:after {
  transform: translate3d(-50%, -50%, 0);
}
</style>
