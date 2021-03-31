<template>
  <div>
    <recipe-card :name="myName"/>
  </div>
</template>

<script>
import RecipeCard from '@/components/main-content/recipe-card/RecipeCard';

const myName = 'aabbcc';

export default {
  name: 'main-content',
  components: {
    RecipeCard
  },
  data() {
    return {
      myName
    }
  }
}
</script>

<style scoped>

</style>
