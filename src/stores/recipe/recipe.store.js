import axios from 'axios';

const apiUrl = 'https://api.edamam.com/search';

export const recipeStore = {
  state: () => ({
    searchExpression: null,
    recipeResults: {a: 'b'}
  }),
  mutations: {
    changeSearchExpression(state, newExpression) {
      state.searchExpression = newExpression;
    }
  },
  getters: {
    getRecipes(state) {
      return state.recipeResults;
    }
  },
  actions: {
    async fetchRecipes(context, payload) {
      const params = {
        q: payload
      };
      axios.get(apiUrl, {params}).then(response => {
        console.log(response);
      });
    }
  }
};
