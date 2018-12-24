<template>
  <div :class="status" class="m-layer">
    <span class="code">[{{ httpCode }}]</span>
    <span class="tip">{{ msg }}</span>
  </div>
</template>

<script>
const STATUS = ['', 'z-success', 'z-worn', 'z-error'];
const STATUSCODE = {
  NORMAL: 0,
  SUCCESS: 1,
  WORN: 2,
  ERROR: 3
};
export default {
  computed: {
    status() {
      return STATUS[this.statusCode];
    }
  },
  props: {
    msg: {
      type: String,
      required: true
    },
    httpCode: {
      type: Number
    },
    statusCode: {
      type: Number,
      required: true
    },
    timer: {
      type: Number,
      default: 5
    }
  }
};
export { STATUSCODE };
</script>

<style scopepd>
.m-layer {
  box-sizing: border-box;
  padding: 0 40px;
  width: 400px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px / 20px;
}
.m-layer.z-success {
  background-color: #3cda10;
}
.m-layer.z-worn {
  background-color: #f2ac32;
}
.m-layer.z-error {
  background-color: #ff513a;
}
</style>
