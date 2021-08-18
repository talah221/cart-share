import { createStore } from "vuex";
import { userStore } from "./user"
import { cartStore } from "./cart"
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userStore,
    cartStore
  },
});
