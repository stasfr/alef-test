<template>
  <div class="input__container" :class="{ error: isError }">
    <div for="PersonName">{{ placeholder }}</div>
    <input
      :type="type"
      :id="id"
      :name="name"
      required
      v-model="model"
      :min="min"
      :max="max"
      :pattern="pattern"
    />
  </div>
</template>

<script setup lang="ts">
import { defineModel, defineProps, watch, ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  min: {
    type: String,
    default: "18",
  },
  max: {
    type: String,
    default: "150",
  },
  pattern: {
    type: String,
    default: "text",
  },
});
const model = defineModel();

const isError = ref<boolean>(false);

watch(model, () => {
  if (
    (props.type === "number" && (model.value as number) < Number(props.min)) ||
    (model.value as number) > Number(props.max)
  ) {
    isError.value = true;
  } else {
    isError.value = false;
  }
});
</script>

<style scoped>
.input__container {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px;
}
.error {
  border: 1px solid red;
}
.input__container > div {
  font-size: 13px;
  color: #111111;
  margin-bottom: 2px;
}
.input__container > input {
  color: #111111;
  line-height: calc(24 / 16 * 100%);
  width: 100%;
}
.input__container > input:focus {
  outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
