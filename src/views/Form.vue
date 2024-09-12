<template>
  <div class="page__main main">
    <div class="main__container _container"><FormComponent /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "@/components/Form/FormComponent.vue";

export default defineComponent({
  components: { FormComponent },
});
</script>

<style scoped>
.main__container {
  display: flex;
  justify-content: center;
}
</style>
