<template>
  <div>
    <div class="name">
      <strong>{{ info.recipe.label }}</strong>
    </div>
    <div class="info">
      <span class="yield">
        <md-icon :md-src="require('@/assets/face_black_24dp.svg')"></md-icon>
        {{ info.recipe.yield }}
      </span>
      <span class="time">
        <md-icon :md-src="require('@/assets/alarm_black_24dp.svg')"></md-icon>
        {{ info.recipe.totalTime }}'
      </span>
      <span class="labels">
        <md-chip v-for="label of info.recipe.dietLabels" :key="label">{{ label }}</md-chip>
      </span>
      <span class="link">
        <a :href="info.recipe.url" target="_blank">
         <md-icon :md-src="require('@/assets/open_in_new_black_24dp.svg')"></md-icon>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import {MdIcon, MdChips} from 'vue-material/dist/components';
import {usePlugins} from '@/helpers/vue-use.helper';

usePlugins([MdIcon, MdChips]);
export default {
  name: 'recipe-info',
  props: {
    info: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  display: grid;
  margin: 0 4px;
  grid-template-rows: 50px;
  grid-template-columns: 50px 50px 1fr 24px;
  column-gap: 6px;
  align-items: center;
  grid-template-areas: "yield time labels link";

  .yield {
    grid-area: yield;
    justify-self: center;
    font-size: 12px;
  }

  .time {
    grid-area: time;
    justify-self: center;
    font-size: 12px;
  }

  .labels {
    grid-area: labels;
  }

  .link {
    grid-area: link;
  }
}

.name {
  margin: 8px 0 0 8px;
}

.md-svg-loader {
  display: inline-block;
  height: 18px;
  line-height: unset;
}
</style>