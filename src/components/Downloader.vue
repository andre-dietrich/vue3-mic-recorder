<style lang="scss">
@import "../scss/icons";
</style>

<template>
  <icon-button
    id="download"
    class="ar-icon ar-icon__xs ar-icon--no-border"
    name="download"
    @click="download"
  />
</template>

<script>
import IconButton from "./IconButton.vue";

export default {
  name: "Downloader",
  props: {
    record: { type: Object },
    filename: { type: String },
  },
  components: {
    IconButton,
  },
  methods: {
    download() {
      if (!this.record.url) {
        return;
      }

      const type = this.record.blob.type.split("/")[1];
      const link = document.createElement("a");
      link.href = this.record.url;
      link.download = `${this.filename}.${type}`;
      link.click();
    },
  },
};
</script>
