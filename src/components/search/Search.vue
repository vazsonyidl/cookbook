<!--suppress CssUnknownTarget -->
<template>
  <form class="form-container" @submit.prevent="search">
    <md-field>
      <label>Search expression(s)</label>
      <img src="../../assets/search_black_24dp.svg" alt="search-icon"/>
      <md-input v-model="searchExpression" placeholder="Type in what you are looking for"></md-input>
      <button type="submit" class="search-button" @click="search()">Search</button>
    </md-field>
  </form>
</template>

<script>
import {mapActions, mapMutations} from 'vuex';
import {MdCard, MdField} from 'vue-material/dist/components';
import {usePlugins} from '@/helpers/vue-use.helper';

usePlugins([MdCard, MdField]);
export default {
  name: 'search',
  data: () => ({
    searchExpression: ''
  }),
  methods: {
    ...mapActions('recipe', ['fetchRecipes']),
    ...mapMutations('recipe', ['setSearchExpression']),
    search: function() {
      this.fetchRecipes(this.searchExpression);
      this.setSearchExpression(this.searchExpression);
    }
  }
};
</script>

<style lang="scss" scoped>

@import "@/styles/colors/colors.scss";

.form-container {
  margin: 12px;

  .search-button {
    border: none;
    border-radius: 16px;
    padding: 8px;
    margin: 4px 0;
    background-color: $primary-grey;
    color: $primary-white;
  }
}
</style>