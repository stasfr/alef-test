<template>
  <footer class="footer">
    <div class="footer__contaier _container">
      <div class="footer__body">
        <div class="footer__text">all rights reserved</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
.footer {
  background-color: #fafafa;
  min-height: 76px;
  display: flex;
  align-items: center;
}
.footer__text {
  font-size: 13px;
}
</style>
