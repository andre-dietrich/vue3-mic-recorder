import { createApp } from 'vue/dist/vue.esm-bundler';
import axios from 'axios'
import VueAxios from 'vue-axios';
import App from './app'

import AudioRecorder from '@/index'

let app = createApp({
  components: {App},
  template: "<App/>"
});

app.use(VueAxios, axios)
app.use(AudioRecorder)

app.mount("#app")
