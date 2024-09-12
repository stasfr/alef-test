<template>
  <div class="page__preview preview">
    <div class="preview__container _container"><PreviewComponent /></div>
  </div>
</template>

<script setup lang="ts">
import PreviewComponent from "@/components/Preview/PreviewComponent.vue";
</script>

<style scoped>
.preview__container {
  display: flex;
  justify-content: center;
}
</style>
