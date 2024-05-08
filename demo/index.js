import { createApp } from 'vue/dist/vue.esm-bundler';
import axios from 'axios'
import VueAxios from 'vue-axios';
import App from './app.vue'

import Vue3MicRecorder from '@'

let app = createApp({
  components: {App},
  template: "<App/>"
});

app.use(VueAxios, axios)
app.use(Vue3MicRecorder)

app.mount("#app")
