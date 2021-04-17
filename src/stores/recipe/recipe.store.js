export const recipeStore = {
  state: () => ({
    searchExpression: null,
    recipeResults: Object
  }),
  mutations: {
    changeSearchExpression(state, newExpression) {
      console.log(this.searchExpression, 'oldstate');
      console.log(newExpression, 'newstate');
      state.searchExpression = newExpression;
    }
  },
  actions: {},
  getters: {}
};
