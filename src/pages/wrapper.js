// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/util/axios"
import Wrapper from './wrapper.vue'
import router from 'Wrapper/config/route'
import store from "Wrapper/store"
import axios from "axios"
import "@/assets/less/reset.less"
import "@/assets/less/fn.less"
import "@/assets/less/common.less"
import "@/assets/lib/font-awesome/css/font-awesome.min.css"
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$ELEMENT = {
  size: 'mini'
};
/* eslint-disable no-new */
// 获取用户信息
const ajaxGetUser = () => {
  return axios({
    url: "/mobilex/user/userinfo"
  })
}
const ajaxLogin = () => {
  return axios({
    url: "/mobilex/user/login",
    method: "post",
    data: {
      username: "aaaaaa",
      password: "aaaaaa"
    }
  })
}
ajaxGetUser().then((ajaxData) => {
  store.state.$common.username = ajaxData.data.username
  new Vue({
    el: '#app',
    router,
    store,
    components: {
      Wrapper
    },
    template: '<Wrapper/>'
  })
})