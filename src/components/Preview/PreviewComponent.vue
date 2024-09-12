<template>
  <div class="preview__wrapper">
    <div class="preview__personal">
      <h2 class="preview__header">Персональные данные</h2>
      <div class="preview__header-data" v-if="isPerson">
        {{ formData.person.name }}, {{ formData.person.age }} лет
      </div>
    </div>
    <div class="preview__childs">
      <h3 class="preview__childs-header">Дети</h3>
      <ChildComponent
        v-for="child in formData.childs"
        :name="child.name"
        :age="child.age"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFormStore } from "@/stores/formData";
import ChildComponent from "./ChildComponent.vue";

const formStore = useFormStore();
const formData = formStore.formData;

const isPerson = formData.person.name !== "" && formData.person.age !== 0;
</script>

<style scoped>
.preview__wrapper {
  line-height: calc(24 / 16 * 100%);
}
.preview__wrapper > *:not(:last-child) {
  margin-bottom: 60px;
}
.preview__personal > *:not(:last-child) {
  margin-bottom: 20px;
}
.preview__header {
  font-weight: 500;
}
.preview__header-data {
  font-weight: 700;
}
.preview__childs > *:not(:last-child) {
  margin-bottom: 20px;
}
.preview__childs-header {
  font-weight: 500;
}
</style>
