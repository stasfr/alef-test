<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="page">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style scoped>
.page {
  min-height: 70vh;
}
</style>
