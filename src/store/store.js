import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    maskInfo: {
      lock: false,
      imgPath: ''
    }

  },
  mutations:{
    maskInfo: function(state,data) {
      state.maskInfo = data;
    }
  },
  actions:{
  	uMaskInfo: function ({commit, state}, data) {
  		commit('maskInfo', data);
  	}
  }
})