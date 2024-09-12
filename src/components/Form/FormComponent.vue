<template>
  <form action="" class="form" @submit.prevent>
    <div class="form__personal personal">
      <h2 class="personal__title">Персональные данные</h2>

      <div class="personal__inputs">
        <div class="input__container">
          <div for="PersonName">Имя</div>
          <input
            type="text"
            id="PersonName"
            name="PersonName"
            required
            v-model="person.name"
          />
        </div>

        <div class="input__container">
          <div for="PersonAge">Возраст</div>
          <input
            type="text"
            id="PersonAge"
            name="PersonAge"
            required
            v-model="person.age"
          />
        </div>
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
        <div class="childs__item" v-for="(child, index) in childs">
          <div class="input__container">
            <div :for="`name${index}`">Имя</div>
            <input
              type="text"
              :id="`name${index}`"
              :name="`name${index}`"
              v-model="childs[index].name"
              required
            />
          </div>

          <div class="input__container">
            <div :for="`age${index}`">Возраст</div>
            <input
              type="text"
              :id="`age${index}`"
              :name="`age${index}`"
              v-model="childs[index].age"
              required
            />
          </div>

          <button class="childs__item-btn" @click.prevent="deleteChild(index)">
            Удалить
          </button>
        </div>
      </div>
    </div>
    <button class="form__btn">Сохранить</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "@/types/child";
import Person from "@/types/person";

export default defineComponent({
  name: "FormComponent",
  setup() {
    const childs = ref<Child[]>([]);
    const person = ref<Person>({ name: "", age: 0 });

    function addChild(): void {
      if (childs.value.length < 5) {
        childs.value.push({ name: "", age: 0 });
      }
    }

    function deleteChild(index: number): void {
      childs.value.splice(index, 1);
    }

    return { childs, person, addChild, deleteChild };
  },
});
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
.input__container {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px;
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
  /* grid-template-columns: 40% 40% auto; */
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
