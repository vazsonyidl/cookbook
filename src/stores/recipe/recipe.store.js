import axios from 'axios';

const apiUrl = 'https://api.edamam.com/search';

export const recipeStore = {
  state: () => ({
    searchExpression: null,
    recipeResults: []
  }),
  mutations: {
    setSearchExpression: (state, newExpression) => {
      state.searchExpression = newExpression;
    },
    setRecipes: (state, recipes) => {
      state.recipeResults = recipes;
    }
  },
  actions: {
    fetchRecipes: async (context, payload) => {
      const params = {
        q: payload
      };
      axios.get(apiUrl, {params}).then(response => context.commit('setRecipes', response.data.hits));
    }
  }
};
