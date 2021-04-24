<template>
  <div class="container">
    <md-card class="card" v-bind:style="{ 'background-image': 'url(' + info.recipe.image + ')' }"></md-card>
    <recipe-info :info="info"></recipe-info>
  </div>
</template>

<script>
import {MdCard} from 'vue-material/dist/components';
import {usePlugins} from '@/helpers/vue-use.helper/';
import RecipeInfo from '../+recipe-info/RecipeInfo';

usePlugins([MdCard]);

export default {
  name: 'recipe-card',
  components: {
    RecipeInfo
  },
  props: {
    info: {
      type: Object
    }
  },
};
</script>

<style scoped>

.container {
  flex: 1 300px;
  height: 38vh;
  min-height: 300px;
  margin: 8px;
  border-radius: 16px;
  box-shadow: 0 1px #dad8d8;
}

.card {
  height: 75%;
  background-size: cover;
  background-position: center;
  border-radius: 24px;
}
</style>
