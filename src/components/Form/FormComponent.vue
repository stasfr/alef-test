<template>
  <form action="" class="form">
    <div class="form__personal personal">
      <h2 class="form__title">Персональные данные</h2>

      <div class="personal__inputs">
        <div class="input__container">
          <div for="name">Имя</div>
          <input type="text" id="name" name="name" />
        </div>

        <div class="input__container">
          <div for="age">Возраст</div>
          <input type="text" id="age" name="age" />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormComponent",
  components: {},
  props: {},
  setup(props) {},
});
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 616px;
}
.personal > *:not(:last-child) {
  margin-bottom: 20px;
}
.form__title {
  font-size: 16px;
  line-height: calc(24 / 16 * 100%);
  font-weight: 500;
}
.personal__inputs > *:not(:last-child) {
  margin-bottom: 10px;
}
.input__container {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px;
}
.input__container > div {
  font-size: 13px;
  color: #111111;
}
.input__container > input {
  color: #111111;
  line-height: calc(24 / 16 * 100%);
}
.input__container > input:focus {
  outline: none;
}
</style>
