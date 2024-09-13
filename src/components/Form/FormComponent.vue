<template>
  <form action="" class="form" @submit.prevent="sendForm">
    <div class="form__personal personal">
      <h2 class="personal__title">Персональные данные</h2>

      <div class="personal__inputs">
        <InputComponent
          v-model="formDataRef.person.name"
          placeholder="Имя"
          type="text"
          id="PersonName"
          name="PersonName"
          pattern="[a-zA-Z]+"
        />
        <InputComponent
          v-model.number="formDataRef.person.age"
          placeholder="Возраст"
          type="number"
          id="PersonAge"
          name="PersonAge"
        />
      </div>
    </div>

    <div class="form__childs childs">
      <div class="childs__header">
        <h2 class="childs__title">Дети (макс. 5)</h2>
        <button class="childs__btn" @click.prevent="addChild">
          <img src="/src/assets/icons/plus-svgrepo-com.svg" alt="plus-sign" />
          Добавить ребенка
        </button>
      </div>

      <div class="childs__body">
        <div class="childs__item" v-for="(child, index) in formDataRef.childs">
          <InputComponent
            v-model="formDataRef.childs[index].name"
            placeholder="Имя"
            type="text"
            :id="`name${index}`"
            :name="`name${index}`"
            pattern="[a-zA-Z]+"
          />
          <InputComponent
            v-model="formDataRef.childs[index].age"
            placeholder="Возраст"
            type="number"
            :id="`age${index}`"
            :name="`age${index}`"
            min="0"
          />

          <button class="childs__item-btn" @click.prevent="deleteChild(index)">
            Удалить
          </button>
        </div>
      </div>
    </div>
    <button class="form__btn">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFormStore } from "@/stores/formData";
import FormData from "@/types/formData";
import InputComponent from "./InputComponent.vue";

const formStore = useFormStore();

const formDataRef = ref<FormData>({
  person: { name: "", age: 0 },
  childs: [],
});

function addChild(): void {
  if (formDataRef.value.childs.length < 5) {
    formDataRef.value.childs.push({ name: "", age: 0 });
  }
}

function deleteChild(index: number): void {
  formDataRef.value.childs.splice(index, 1);
}

function sendForm(): void {
  formStore.saveFormData(formDataRef.value);
  formDataRef.value = {
    person: { name: "", age: 0 },
    childs: [],
  };
}
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 616px;
  display: flex;
  flex-direction: column;
}
.form > *:not(:last-child) {
  margin-bottom: 45px;
}

.personal > *:not(:last-child) {
  margin-bottom: 20px;
}
.personal__title {
  font-size: 16px;
  line-height: calc(24 / 16 * 100%);
  font-weight: 500;
}
.personal__inputs > *:not(:last-child) {
  margin-bottom: 10px;
}

.childs__header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.childs__header > *:not(:last-child) {
  margin-bottom: 10px;
}
.childs__btn {
  color: #01a7fd;
  border: 2px solid #01a7fd;
  padding: 10px 20px;
  border-radius: 100px;
  background-color: #ffffff;
}

.childs > *:not(:last-child) {
  margin-bottom: 20px;
}
.childs__item {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  align-items: center;
}
.childs__item:not(:last-child) {
  margin-bottom: 20px;
}
.childs__item-btn {
  background-color: #ffffff;
  border-radius: 4px;
  color: #01a7fd;
}
@media (min-width: 480px) {
  .childs__header {
    flex-direction: row;
  }
  .childs__header > *:not(:last-child) {
    margin-bottom: 0;
  }
  .childs__item {
    grid-template-columns: 40% 40% auto;
    grid-template-rows: none;
    gap: 18px;
  }
  .childs__item:not(:last-child) {
    margin-bottom: 10px;
  }
  .childs__btn {
    padding: 10px 20px;
  }
  .form {
    display: block;
  }
}

.form__btn {
  padding: 10px 20px;
  background-color: #01a7fd;
  color: #ffffff;
  font-size: 16px;
  border-radius: 100px;
  margin: 0 auto;
}
</style>
