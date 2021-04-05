<template>
  <div class="container">
    <md-card>
      <md-card-header>
        <div class="md-title">{{ info.name }}</div>
      </md-card-header>
      <md-card-content>
        {{ info.description }}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import {MdCard, MdButton} from 'vue-material/dist/components';
import {usePlugins} from '@/helpers/vue-use.helper';

usePlugins([MdCard, MdButton]);

export default {
  name: 'recipe-card',
  props: {
    info: {
      type: Object
    }
  }
};
</script>

<style scoped>

.container {
  margin: 8px;
  border-radius: 4px;
  box-shadow: 1px 3px #dad8d8;
}
</style>
