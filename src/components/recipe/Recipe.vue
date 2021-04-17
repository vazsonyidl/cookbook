<template>
  <div>
    <section v-if="recipes">
      <recipe-card v-for="recipe of recipes" :info="recipe" :key="recipe.label"/>
    </section>
    <button @click="fetchRecipes">Fetch</button>
  </div>
</template>

<script>
import RecipeCard from '@/components/recipe/+recipe-card/RecipeCard/';
// import axios from 'axios';

// const apiUrl = 'https://api.edamam.com/search';

export default {
  name: 'recipe',
  components: {
    RecipeCard
  },
  data() {
    return {
      recipes: null
    };
  },
  methods: {
    fetchRecipes: function () {
      const {responseConst} = require('./+recipe-card/response.const');
      this.recipes = responseConst.hits;
      // const params = {
      //   q: 'chicken'
      // };
      // axios.get(apiUrl, {params}).then(response => {
      //   console.log(response.data.hits);
      //   this.recipes = response?.data?.hits;
      // });
    }
  }
};

</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
}
</style>
