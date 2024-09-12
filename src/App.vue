<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="page">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<style scoped>
.page {
  min-height: 70vh;
}
</style>
