import Vue from "vue";
import Vuex from "vuex";

import {recipeStore} from './recipe/recipe.store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recipe: {
      namespaced: true,
      ...recipeStore
    }
  }
});

export {store};
