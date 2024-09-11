<template>
  <div class="page__form form">
    <div class="form__container _container"><FormComponent /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "@/components/Form/FormComponent.vue";

export default defineComponent({
  components: { FormComponent },
  setup(props) {},
});
</script>

<style scoped></style>
