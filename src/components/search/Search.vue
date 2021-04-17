<!--suppress CssUnknownTarget -->
<template>
  <form class="form-container">
    <md-field>
      <label>Search expression(s)</label>
      <img src="../../assets/search_black_24dp.svg" alt="search-icon"/>
      <md-input v-model="searchExpression" placeholder="Type in what you are looking for"></md-input>
      <button type="button" class="search-button" @click="search()">Search</button>
    </md-field>
  </form>
</template>

<script>
import {MdCard, MdField} from 'vue-material/dist/components';
import {usePlugins} from '@/helpers/vue-use.helper';

usePlugins([MdCard, MdField]);
export default {
  name: 'search',
  data: () => ({
    searchExpression: ''
  }),
  methods: {
    search: function() {
      this.$store.commit('recipe/changeSearchExpression', this.searchExpression);
      console.log(this.$store.state.recipe.searchExpression);
    }
  }
};
</script>

<style scoped>

</style>