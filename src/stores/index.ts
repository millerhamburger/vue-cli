import { createStore } from "vuex"


const store = createStore<State>({
  state() {
    return {
      count: 0
    };
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  mutations: {
    add(state, addNum: number) {
      state.count = state.count + addNum;
    }
  }
});

export default store;