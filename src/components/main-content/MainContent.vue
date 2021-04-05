<template>
  <div>
    <recipe-card :info="recipeInfo"/>
  </div>
</template>

<script>
import RecipeCard from '@/components/main-content/recipe-card/RecipeCard';

export default {
  name: 'main-content',
  components: {
    RecipeCard
  },
  data() {
    return {
      recipeInfo: {
        name: 'Burger',
        description: 'A fancy burger with cheese'
      }
    }
  }
}
</script>

<style scoped>

</style>
