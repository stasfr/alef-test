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
      <div
        class="preview__childs-item"
        v-for="(child, index) in formData.childs"
      >
        {{ child.name }}, {{ child.age }} лет
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFormStore } from "@/stores/formData";

export default defineComponent({
  name: "PreviewComponent",
  setup() {
    const formStore = useFormStore();
    const formData = formStore.formData;

    const isPerson = formData.person.name !== "" && formData.person.age !== 0;

    return { formData, isPerson };
  },
});
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
.preview__childs-item {
  font-weight: 700;
  background-color: #f1f1f1;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
