// initial state
// 定义全局变量
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "zhang",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      //todo 改为远程获取登录信息
      commit("updateUser", { userName: "小乐" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser += payload;
    },
  },
} as StoreOptions<any>;
