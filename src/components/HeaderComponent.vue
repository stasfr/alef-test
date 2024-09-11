<template>
  <header class="header">
    <div class="header__container _container">
      <RouterLink to="/" class="header__logo">
        <img src="/src/assets/img/logo.png" alt="alef-logo" />
      </RouterLink>
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <RouterLink to="/" class="menu__link">Форма</RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink to="/Preview" class="menu__link">Превью</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.1);
}
.header__container {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 480px) {
  .header__container {
    justify-content: center;
    position: relative;
  }

  .header__logo {
    position: absolute;
    left: 20px;
  }
}
.menu__list {
  display: flex;
}
.menu__item:not(:last-child) {
  margin-right: 10px;
}
.menu__link {
  color: #111111;
  font-size: 14px;
}
</style>
