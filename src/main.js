import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import {axiosGetInterceptor as getIntrcpt} from '@/interceptors/axios-get.interceptor';

axios.interceptors.request.use(getIntrcpt.onFulfilled, getIntrcpt.onRejected, {runWhen: getIntrcpt.runWhen});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
