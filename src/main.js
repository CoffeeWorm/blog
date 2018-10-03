// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { debug } from 'util';

Vue.config.productionTip = false;

Vue.filter('time', (val, template = 'yyyy-MM-dd hh:mm') => {
  let stamp = new Date(val);
  let map = { y: /y+/, M: /M+/, d: /d+/, h: /h+/, m: /m+/, s: /s+/ };
  let timer = {
    y: stamp.getFullYear().toString(),
    M: (1 + stamp.getMonth()).toString(),
    d: stamp.getDay().toString(),
    h: stamp.getHours().toString(),
    m: stamp.getMinutes().toString(),
    s: stamp.getSeconds().toString()
  };
  let zero = num => new Array(num + 1).join('0');
  for (let item of Object.keys(map)) {
    template = template.replace(map[item], tmpstr => {
      let tim = timer[item];
      let rs;
      if (tmpstr.length >= tim.length) {
        rs = zero(tmpstr.length - tim.length) + tim;
      } else {
        rs = tim.substr(tim.length - tmpstr.length, tmpstr.length);
      }
      return rs;
    });
  }
  return template;
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
