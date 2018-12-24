import axios from 'axios';
import event from './event.js';
import { STATUSCODE } from './layer.vue';

let cache = axios.create({
  baseURL: 'http://localhost:60000',
  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function(e) {},

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function(e) {}
});

cache.interceptors.response.use(
  function(res) {
    if (/^2[0-9]{2}$/.test(res.data.code)) {
      return res.data.result;
    }
    event.$edmit('layer.push', {
      httpCode: res.data.code,
      statusCode: STATUSCODE.ERROR,
      msg: res.data.message
    });
  },
  function(e) {
    let msg;
    let httpCode = e.response.status;

    if (/^4[0-9]{2}$/.test(httpCode)) {
      msg = '网络错误，请更换网络后重试！';
    } else if (/^5[0-9]{2}$/.test(httpCode)) {
      msg = '服务器错误，请稍后再试';
    }
    event.$emit('layer.push', {
      httpCode,
      statusCode: STATUSCODE.ERROR,
      msg
    });
  }
);

export default cache;
