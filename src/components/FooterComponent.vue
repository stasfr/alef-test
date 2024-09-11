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
  text-align: center;
}
.footer__text {
  font-size: 13px;
}
</style>
