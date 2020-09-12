import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  posts: [],
};

const getters = {
  allPosts: (state) => state.posts.slice(0, 10),
};
const mutations = {
  getPosts: (state, posts) => (state.posts = posts),
};
const actions = {
  async getAllposts({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("getPosts", response.data);
  },
};

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// };
// export default new Vuex.Store({
//   modules: {
//     posts,
//   },
// });

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
