<template>
  <div class="m-album f-cf" @click.stop="showDetail($event)">
    <div class="item f-lazy" v-for="item in albumList" :key="item.src">
      <img class="img" :data-src="item.src" :src="item.src">
    </div>
    <div class="item more" v-if="manager">
      <i class="fa fa-plus" title="添加/删除"></i>
    </div>
    <Modal class="modal" v-if="showImg" @onclose="modalClose" v-bind="params">
      <div @click.stop="switchImg($event)">
        <i class="fa fa-angle-left"></i>
        <img class="detail" v-if="imgSrc" :src="imgSrc" alt="" ref="j-imgdetail">
        <i class="fa fa-angle-right"></i>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './modal';
export default {
  components: { Modal },
  methods: {
    showDetail(e) {
      e.stopPropagation();
      let target = e.target;
      switch (target.className) {
        case 'img':
          let src = target.getAttribute('data-src');
          this.imgSrc = src;
          this.showImg = !0;
          break;
        default:
          break;
      }
    },
    modalClose() {
      this.showImg = false;
    },
    switchImg(e) {
      let target = e.target;
      let dom = this.$refs['j-imgdetail'];
      let findindex = src => {
        return this.albumList.findIndex(item => {
          return item.src === dom.src;
        });
      };
      let jump = (slope) => {
        let index = findindex(dom.src);
        let len = this.albumList.length;
        index = (index + slope * 1) % len;
        index = index < 0 ? len + index : index;
        dom.src = this.albumList[index].src;
      };
      switch (target.className) {
        case 'fa fa-angle-right':
          jump(+1);
          break;
        case 'fa fa-angle-left':
          jump(-1);
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    //mock data
    let one = {
      src: 'https://dummyimage.com/439x439/c00/fff',
      intro: 'this is a img',
      show: false
    };
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(one);
    }
    this.albumList = arr;
  },
  data() {
    return {
      imgSrc: '',
      manager: !1,
      showImg: !1,
      params: {
        close: false,
        know: false
      },
      albumList: []
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
  margin-bottom: 2px;
  float: left;
  transition: background-color 300ms;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
}
.m-album .item.more {
  background-color: rgba(0, 0, 0, 0.2);
}
.m-album .item.more .fa {
  display: block;
  text-align: center;
  font-size: 50px;
  line-height: 439px;
  color: #000;
  transition: color 100ms ease-in-out;
}
.m-album .item.more .fa:hover {
  color: #fff;
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
.m-album .modal >>> .m-modal,
.m-album .modal >>> .container {
  padding: 0;
  background: transparent;
}
.m-album .modal .fa.fa-angle-left,
.m-album .modal .fa.fa-angle-right {
  position: absolute;
  top: 40%;
  opacity: 0.2;
  font-size: 80px;
  color: #fff;
  transition: 200ms color;
  cursor: pointer;
}
.m-album .modal .fa.fa-angle-left {
  left: 0;
}
.m-album .modal .fa.fa-angle-right {
  right: 0;
}
.m-album .modal .fa.fa-angle-left:hover,
.m-album .modal .fa.fa-angle-right:hover {
  opacity: 1;
}
.m-album .modal .detail {
  max-width: 1000px;
}
</style>
