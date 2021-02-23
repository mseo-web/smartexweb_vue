import Vue from 'vue'
import Vuex from 'vuex'

import CategoriesStore from "./modules/categories";
import ProjectsStore from "./modules/projects";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CategoriesStore,
    ProjectsStore,
  }
})
