<template>
  <div class="m-msgqueque">
    <Modal
      :title="modalQueque[0].title"
      @onclose="modalClose"
      @onknow="modalKnow"
      class="modal"
      v-if="msgShow && modalQueque[0]"
    >{{ modalQueque[0].content }}</Modal>
    <div :key="index" class="wrap" v-for="(item, index ) in layerQueque">
      <Layer
        :httpCode="item.httpCode"
        :msg="item.msg"
        :statusCode="item.statusCode"
        class="layer"
      />
    </div>
  </div>
</template>
<script>
import Modal from './modal';
import Layer from './layer';
import event from './event';

export default {
  components: { Modal, Layer },
  mounted() {
    event.$on('layer.push', this.layerPush.bind(this));
    event.$on('layer.shift', this.layerShift.bind(this));

    event.$on('modal.push', this.modalPush.bind(this));
    event.$on('modal.shift', this.modalShift.bind(this));
    event.$on('modal.show', this.modalShow.bind(this));
    event.$on('modal.close', this.modalClose.bind(this));
    event.$on('modal.unshow', this.modalUnshow.bind(this));
  },
  data: () => ({
    msgShow: false,
    layerQueque: [],
    modalQueque: []
  }),
  methods: {
    layerPush(val) {
      setTimeout(() => {
        this.layerQueque.shift();
      }, 2000);
      return this.layerQueque.push(val);
    },
    layerShift(val) {
      return this.layerQueque.shift(val);
    },
    modalPush(val) {
      return this.modalQueque.push(val);
    },
    modalShift(val) {
      return this.modalQueque.shift(val);
    },
    modalShow(val) {
      val && this.modalPush(val);
      this.msgShow = true;
    },
    modalUnshow() {
      this.msgShow = false;
    },
    modalKnow() {
      this.modalQueque[0] && this.modalQueque[0].know();
      this.modalQueque.shift();
      this.modalUnshow();
    },
    modalClose() {
      this.modalQueque[0] && this.modalQueque[0].close();
      this.modalQueque.shift();
      this.modalUnshow();
    }
  }
};
</script>
<style scoped>
.m-msgqueque {
  position: fixed;
  top: 60px;
  left: 50%;
  margin-left: -200px;
  text-align: center;
}
.m-msgqueque .wrap + .wrap {
  margin-top: 10px;
}
.m-msgqueque .layer {
  display: inline-block;
}
</style>
