<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
import { computed } from "vue";

const route = useRoute();

const layouts = {
  MainLayout,
};

const layout = computed(() => {
  const layoutKey = route.meta.layout as keyof typeof layouts;

  return layouts[layoutKey || "MainLayout"];
});
</script>

<style scoped>
.page {
  min-height: 70vh;
}
</style>
