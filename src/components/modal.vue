<template>
  <div class="f-full">
    <div class="m-modal">
      <i class="u-icon u-icon-close" @click.stop="_onclose"></i>
      <p class="title" v-if="title">{{title}}</p>
      <div class="container">
        <slot></slot>
      </div>
      <div class="btnaera">
        <button class="u-btn know" v-if="know" @click.stop="_onknow">{{know}}</button>
        <button class="u-btn close" v-if="close" @click.stop="_onclose">{{close}}</button>
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
      default: ()=>[]
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
    _onclose() {
      this.$emit('onclose');
    },
    _onknow() {
      this.$emit('onknow');
    }
  }
};
</script>

<style>
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
  padding: 7px;
}
.m-modal .btnaera {
  margin: 0 0 10px;;
  text-align: center;  
}
.m-modal .btnaera .u-btn+.u-btn{
  margin-left: 15px;
}
.m-modal .u-icon-close {
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0px;
}
</style>