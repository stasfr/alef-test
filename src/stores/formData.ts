import { defineStore } from "pinia";
import { ref } from "vue";
import FormData from "@/types/formData";

export const useFormStore = defineStore("FormStore", () => {
  const formData = ref<FormData>({ person: null, childs: null });

  return { formData };
});
