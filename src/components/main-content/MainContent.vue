<template>
  <div>
    <section v-if="recipes">
      <recipe-card v-for="recipe of recipes" :info="recipe" :key="recipe.label"/>
    </section>
    <button @click="fetchRecipes">Fetch</button>
  </div>
</template>

<script>
import RecipeCard from '@/components/main-content/recipe-card/RecipeCard';
import axios from 'axios';

const apiUrl = 'https://api.edamam.com/search';

export default {
  name: 'main-content',
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
      const params = {
        q: 'chicken'
      };
      axios.get(apiUrl, {params}).then(response => {
        console.log(response.data.hits);
        this.recipes = response?.data?.hits;
      });
    }
  }
};

</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
