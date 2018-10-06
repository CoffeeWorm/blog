<template>
  <div class="f-full" @click="clickHanlder($event)">
    <div class="m-modal">
      <i class="fa fa-times"></i>
      <p class="title" v-if="title">{{title}}</p>
      <div class="container">
        <slot></slot>
      </div>
      <div class="btnaera">
        <button class="u-btn know" v-if="know">{{know}}</button>
        <button class="u-btn close" v-if="close">{{close}}</button>
        <button class="u-btn" v-for="item in customBtn" :key="item.content" v-if="customBtn" @click.stop="item.event">{{item.content}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      default: '关闭'
    },
    know: {
      default: '知道了'
    },
    customBtn: {
      default: () => []
    },
    content: {
      default: ''
    },
    title: {
      default: ''
    }
  },
  data: function() {
    return {};
  },
  methods: {
    clickHanlder(e) {
      e.stopPropagation();
      let target = e.target;
      switch (target.className) {
        case 'u-btn know':
          this.$emit('onknow');
          break;
        case 'fa fa-times':
        case 'u-btn close':
          this.$emit('onclose');
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.f-full {
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
}
.m-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0 15px;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.m-modal .title {
  line-height: 2;
  font-size: 18px;
  border-bottom: 1px solid #666;
}
.m-modal .container {
  position: relative;
  padding: 7px;
}
.m-modal .btnaera {
  margin: 0 0 10px;
  text-align: center;
}
.m-modal .btnaera .u-btn + .u-btn {
  margin-left: 15px;
}
.m-modal .fa.fa-times {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
  font-size: 25px;
  line-height: 1;
  cursor: pointer;
  transition: color 200ms;
}
.m-modal .fa:hover {
  color: #fff;
}
</style>