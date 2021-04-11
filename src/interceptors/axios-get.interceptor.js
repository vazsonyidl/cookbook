export const onGetRequest = (config) => config.method === 'get';

export const axiosGetInterceptor = {
  onFulfilled: function (config) {
    config.params = {
      ...config.params,
      app_id: process.env.VUE_APP_ID,
      app_key: process.env.VUE_APP_KEY
    }
    return config;
  },
  onRejected: null,
  runWhen: onGetRequest
}
