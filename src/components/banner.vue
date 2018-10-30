<template>
  <div class="m-banner f-cb" @click.stop="">
    <ul class="imglist" @mouseenter="onmouseenter" @mouseout="onmouseout">
      <li class="item" v-for="img in imgList" :key="img" :class="{'z-active': img === current}">
        <img class="img f-lazy" :src="img.src" :alt="img.name">
      </li>
    </ul>
    <i class="fa fa-angle-left"></i>
    <i class="fa fa-angle-right"></i>
    <ul class="pointers f-cb">
      <li class="pointer z-active" v-for="i in imgList.length" :key="i" :class="{'z-active': i === current}">
        <i class="fa fa-circle"></i>
        <i class="fa fa-circle-o" style="display: none"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    imgList: {
      default: [
        {
          src: 'https://dummyimage.com/160x90/cdf/fff',
          name: ''
        },
        {
          src: 'https://dummyimage.com/160x90/c49/fff',
          name: ''
        },
        {
          src: 'https://dummyimage.com/160x90/346/fff',
          name: ''
        },
        {
          src: 'https://dummyimage.com/160x90/890/fff',
          name: ''
        }
      ]
    }
  },
  data() {
    return {
      current: 1
    };
  },
  methods: {
    play() {},
    next(index) {},
    onmouseenter() {},
    onmouseout() {}
  }
};
</script>
<style scoped>
.m-banner {
  overflow: hidden;
}
.m-banner .imglist {
  position: relative;
}
.m-banner .imglist .item {
}
.m-banner .imglist .item .img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
