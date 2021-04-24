<template>
  <section v-if="recipeResults">
    <recipe-card v-for="recipe of recipeResults" :info="recipe" :key="recipe.label"/>
  </section>
</template>

<script>
import {mapState} from 'vuex';
import RecipeCard from '@/components/recipe/+recipe-card/RecipeCard/';

export default {
  name: 'recipe',
  components: {
    RecipeCard
  },
  computed: mapState('recipe', ['recipeResults'])
};

</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
}
</style>
