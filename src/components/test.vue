<template>
<div class="m-comtentbox f-pr">
  <div class="title" @click="toggle">
      {{title}}
  </div>
  <div class="content" :class="{toggle:toggled}">
    <slot></slot>
  </div>
</div>  
</template>

<script>
export default {
  props: ['title'],
  data: ()=>{
    return {
      toggled: false
    }
  },
  methods: {
    toggle(){
      this.toggled = !this.toggled;
    }
  }
}
</script>

<style scoped>
  .m-comtentbox .title {
    padding: 10px 3px;
    background-color: #fff;
    font-weight: bold;
  }
  .m-comtentbox .content {
    padding: 10px;
    background: #ddd;
    overflow: hidden;
  }
  .m-comtentbox .toggle {
    height: 0;
    padding: 0;
  }
</style>

