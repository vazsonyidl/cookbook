<template>
  <div id="app">
    <app-header/>
    <main-content/>
  </div>
</template>

<script>
import AppHeader from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';

export default {
  name: 'App',
  components: {
    AppHeader,
    MainContent
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
