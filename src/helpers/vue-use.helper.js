import Vue from 'vue';

export const usePlugins = (plugins) => {
  for (let plugin of plugins) {
    Vue.use(plugin);
  }
}
