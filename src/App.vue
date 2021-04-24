<template>
  <div id="app">
    <app-header/>
    <search/>
    <recipe/>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import AppHeader from '@/components/header/Header/';
import Search from '@/components/search/Search/';
import Recipe from '@/components/recipe/Recipe/';

export default {
  name: 'App',
  components: {
    AppHeader,
    Recipe,
    Search
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
