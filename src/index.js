import AudioRecorder from '@/components/AudioRecorder.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'

const plugin = {
  install(app) {
    app.component(AudioRecorder.name, AudioRecorder)
    app.component(AudioPlayer.name, AudioPlayer)
  },
}

export default plugin
