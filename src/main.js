import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import {store} from './stores/stores';
import {axiosGetInterceptor as getIntrcpt} from '@/interceptors/axios-get.interceptor';

axios.interceptors.request.use(getIntrcpt.onFulfilled, getIntrcpt.onRejected, {runWhen: getIntrcpt.runWhen});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
