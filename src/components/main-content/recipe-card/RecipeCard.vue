<template>
  <div class="container">
    <md-card class="card" v-bind:style="{ 'background-image': 'url(' + info.recipe.image + ')' }">
      <md-card-header>
        <div class="md-title">{{ info.recipe.label }}</div>
      </md-card-header>
      <md-card-content>

      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import {MdCard, MdButton} from 'vue-material/dist/components';
import {usePlugins} from '@/helpers/vue-use.helper';

usePlugins([MdCard, MdButton]);

const image = "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg";
export default {
  name: 'recipe-card',
  props: {
    info: {
      type: Object
    }
  },
  data () {
    return {
      image
    };
  }
};
</script>

<style scoped>

.container {
  flex: 1 300px;
  height: 40vh;
  min-height: 300px;
  margin: 8px;
  border-radius: 16px;
  box-shadow: 1px 3px #dad8d8;
}

.card {
  color: white;
  background-size: cover;
  height: 75%;
}
</style>
