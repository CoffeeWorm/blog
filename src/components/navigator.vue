<template>
  <nav class="m-nav">
    <div class="f-fl">
      <span class="logo">Coffee_Worm</span>
    </div>
    <ul class="f-fr f-pr">
      <li
        :key="it.path"
        @mouseout="onMousrLeave()"
        @mouseover="onMouseHover(index)"
        class="item active"
        ref="j-navitem"
        v-for="(it, index ) in navList"
      >
        <router-link :to="it.path">{{it.name}}</router-link>
      </li>
      <li
        :style="{width:barWidth+'px',left:barLeft+'px'}"
        class="decoratebar f-pa"
      ></li>
    </ul>
  </nav>
</template>

<script>
import event from './event.js';

export default {
  props: {
    navList: {
      type: Array,
      default: () => [
        {
          path: '',
          name: ''
        }
      ]
    }
  },
  data: () => {
    return {
      barWidth: 0,
      barLeft: 0,
      active: -1
    };
  },
  methods: {
    onMousrLeave() {
      if (!~this.active) {
        this.barWidth = 0;
        this.barLeft = 0;
      } else {
        this.barWidth = this.navList[this.active].width;
        this.barLeft = this.navList[this.active].left;
      }
    },
    setDefault(to) {
      let index = -1;
      for (let i = this.navList.length - 1; i >= 0; i--) {
        if (new RegExp(this.navList[i].path).test(to || location.hash)) {
          index = i;
          break;
        }
      }
      this.active = index;
      this.onMousrLeave();
    },
    onMouseHover(index) {
      this.barWidth = this.navList[index].width;
      this.barLeft = this.navList[index].left;
    }
  },
  mounted() {
    for (let i = this.navList.length - 1; i >= 0; i--) {
      this.navList[i].width = this.$refs['j-navitem'][i].offsetWidth;
      this.navList[i].left = this.$refs['j-navitem'][i].offsetLeft;
    }
    this.setDefault();
    event.$on('routerupdate', this.setDefault.bind(this));
  }
};
</script>

<style>
.m-nav {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  overflow: hidden;
}
.m-nav .logo {
  margin-left: 50px;
  font-size: 25px;
  font-weight: bold;
  color: #333;
  line-height: 50px;
}
.m-nav ul {
  margin-right: 100px;
}
.m-nav .item {
  float: left;
  padding: 0 15px;
  font-size: 18px;
  font-family: 'Microsoft YaHei';
  line-height: 50px;
  text-decoration: none;
  list-style-type: none;
}
.m-nav .item + .item {
  margin-left: 30px;
}
.m-nav .decoratebar {
  bottom: 0;
  width: 102px;
  height: 5px;
  border-radius: 2px;
  background-color: rgba(43, 168, 226, 0.5);
  transition: all 300ms ease-in-out;
}
</style>
