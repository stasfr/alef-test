<template>
  <div class="page__preview preview">
    <div class="preview__container _container"><PreviewComponent /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PreviewComponent from "@/components/Preview/PreviewComponent.vue";

export default defineComponent({
  components: { PreviewComponent },
});
</script>

<style scoped>
.preview__container {
  display: flex;
  justify-content: center;
}
</style>
