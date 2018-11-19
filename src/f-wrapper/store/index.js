import Vue from 'vue'
import Vuex from 'vuex'
import widgetStore from "./widget"
import commonStore from "./common"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    $widget: widgetStore,
    $common: commonStore
  }
})
