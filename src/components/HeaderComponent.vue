<template>
  <header>
    <router-link to="/">Home</router-link>
    <router-link to="/Preview">Preview</router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

<style scoped></style>
