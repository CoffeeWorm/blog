import axios from 'axios';

let cache = axios.create({
  baseURL: 'http://localhost:60000',
  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (e) {
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (e) {
  }
});

cache.interceptors.response.use(function (res) {
  if (/^2\S{2}$/.test(res.status)) {
    return res.data.result;
  }
  console.log('error');
}, function (error) {
});

export default cache;
