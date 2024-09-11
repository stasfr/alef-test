import { createRouter, createWebHistory } from "vue-router";
import Form from "@/views/Form.vue";
import Preview from "@/views/Preview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Form,
    },
    {
      path: "/Preview",
      name: "Preview",
      component: Preview,
    },
  ],
});

export default router;
