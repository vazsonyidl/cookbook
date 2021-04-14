<template>
  <form>
    <md-field>
      <label>Search expression(s)</label>
      <md-input v-model="searchExpression" placeholder="Enter your search keyword(s)"></md-input>
    </md-field>
  </form>
</template>

<script>
import {MdCard, MdField} from 'vue-material/dist/components';
import {usePlugins} from '@/helpers/vue-use.helper';

usePlugins([MdCard, MdField]);
export default {
  name: 'search',
  data: () => ({
    searchExpression: ''
  })
};
</script>

<style scoped>

</style>