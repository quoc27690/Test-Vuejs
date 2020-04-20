const state = {
  result: 0
};

const getters = {
  tenResult: state => {
    return state.result * 10;
  },
  // Taọ thêm 1 hàm để làm ví dụ cho mapGetters
  nameResult: state => {
    return state.result + " name product";
  }
};

const mutations = {
  increment(state, n) {
    state.result += n;
  },
  decrement(state) {
    state.result--;
  }
};

const actions = {
  increment: ({ commit }) => {
    commit("increment", 30);
  },
  asyncDecrement: ({ commit }) => {
    setTimeout(() => {
      commit("decrement");
    }, 2000);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
