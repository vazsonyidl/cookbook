<template>
    <div class="container">
      <md-card>
        <md-card-header>
          <div class="md-title">{{name}}</div>
        </md-card-header>

        <md-card-content>
          Some fancy thing should come here.
        </md-card-content>

        <md-card-actions>
          <md-button>a</md-button>
          <md-button>b</md-button>
        </md-card-actions>
      </md-card>
    </div>
</template>

<script>
import {MdCard, MdButton} from 'vue-material/dist/components';
import {usePlugins} from '@/components/helpers/vue-use.helper';

usePlugins([MdCard, MdButton]);

export default {
  name: 'recipe-card',
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style scoped>

.container {
  margin: 8px;
}
</style>
