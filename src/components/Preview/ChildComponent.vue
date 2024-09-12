<template>
  <div class="preview__childs-item">{{ name }}, {{ age }} лет</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.preview__childs-item {
  font-weight: 700;
  background-color: #f1f1f1;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
