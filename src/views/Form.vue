<template>
  <div class="page__main main">
    <div class="main__container _container"><FormComponent /></div>
  </div>
</template>

<script setup lang="ts">
import FormComponent from "@/components/Form/FormComponent.vue";
</script>

<style scoped>
.main__container {
  display: flex;
  justify-content: center;
}
</style>
