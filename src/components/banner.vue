<template>
  <div class="m-banner f-cb" @click.stop="clickHandler($event)" @mouseover.stop="stop" @mouseout.stop="play">
    <ul class="imglist">
      <li class="item" v-for="(img, idx) in imgList" :class="{'z-active': idx === current, movenext: isNext(idx), moveback: isBack(idx)}" :data-Index="idx" :key="idx">
        {{idx}}
        <img class="img" :src="img.src" :alt="img.name">
      </li>
    </ul>
    <i class="fa fa-angle-left left" ref="back"></i>
    <i class="fa fa-angle-right right" ref="next"></i>
    <ul class="pointers f-cb">
      <li class="pointer" v-for="i in imgList.length" :key="i - 1" :class="{'z-active': i - 1 === current}">
        <i class="fa fa-circle-o normal" :data-index="i - 1"></i>
        <i class="fa fa-circle current" :data-index="i - 1"></i>
      </li>
    </ul>
  </div>
</template>
<script>
const NEXT = 1;
const BACK = -1;
export default {
  props: {
    timestamp: {
      type: Number,
      default: 1
    }
  },
  data: () => {
    return {
      imgList: [
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
      ],
      current: 0,
      dir: NEXT,
      interval: undefined
    };
  },
  methods: {
    play() {
      // this.inerval = setInterval(() => {
      //   this.next();
      // }, this.timestamp * 1000);
    },
    stop() {
      clearInterval(this.inerval);
    },
    next(index = this.current + 1) {
      this.current = +index % this.imgList.length;
      this.dir = NEXT;
    },
    back(index = this.current - 1) {
      this.dir = BACK;
      this.current = index < 0 ? this.imgList.length - 1 : index;
    },
    clickHandler(e) {
      let target = e.target;
      switch (target) {
        case this.$refs.back:
          this.back();
          break;
        case this.$refs.next:
          this.next();
          break;
        default: {
          let tmp = target.dataset.index;
          tmp != null && this.next(tmp);
          break;
        }
      }
    },
    isNext(index) {
      let res = index === this.current || index === (this.current + 1) % this.imgList.length;
      return res && this.dir === NEXT;
    },
    isBack(index) {
      let tmp = this.current - 1;
      let res = index === this.current || index === (this.current + 1) % this.imgList.length;
      return res && this.dir === BACK;
    }
  },
  mounted() {
    this.play();
  }
};
</script>
<style scoped>
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
.m-banner {
  position: relative;
  color: #999;
  overflow: hidden;
  background: rgba(100, 100, 100, 0.1);
}
.m-banner .imglist {
  position: relative;
  margin: 0 auto;
  height: 450px;
  width: 800px;
}
.m-banner .imglist .item {
  position: absolute;
  height: 450px;
  width: 800px;
}
.m-banner .imglist .item.z-active {
  z-index: 10;
}
.m-banner .imglist .item.movenext {
  animation: moveLeft 1s 1 ease-out;
  animation-fill-mode: forwards;
}
.m-banner .imglist .item.moveback {
  animation: moveRight 1s 1 ease-out;
  animation-fill-mode: forwards;
}
.m-banner .imglist .item.movenext.z-active {
  left: 100%;
}
.m-banner .imglist .item.moveback.z-active {
  right: 100%;
}
.m-banner .imglist .item .img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.m-banner .pointers {
  position: absolute;
  left: 50%;
  z-index: 20;
  bottom: 10px;
  transform: translateX(-50%);
}
.m-banner .pointers .pointer {
  float: left;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}
.m-banner .pointer .current {
  display: none;
}
.m-banner .pointer.z-active .current {
  display: block;
  color: #444;
}
.m-banner .pointer.z-active .normal {
  display: none;
}
.m-banner .pointer + .pointer {
  margin-left: 10px;
}
.m-banner .left,
.m-banner .right {
  position: absolute;
  top: 50%;
  z-index: 20;
  transform: translateY(-50%);
  transition: color 200ms ease-in-out;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.m-banner .left {
  left: 20px;
}
.m-banner .right {
  right: 20px;
}
.m-banner .left:hover,
.m-banner .right:hover {
  color: rgba(255, 255, 255, 1);
}
</style>
