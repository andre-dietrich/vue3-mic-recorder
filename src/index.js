import AudioPlayer   from '@/components/player.vue'
import AudioRecorder from '@/components/recorder.vue'

const components = {
  AudioPlayer,
  AudioRecorder,

  install (app) {
    if (this.installed) {
      return
    }

    this.installed = true

    app.component('audio-player', AudioPlayer)
    app.component('audio-recorder', AudioRecorder)
  }
}

export default components

export { AudioPlayer, AudioRecorder }
