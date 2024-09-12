import { defineStore } from "pinia";
import { ref } from "vue";
import FormData from "@/types/formData";

export const useFormStore = defineStore("FormStore", () => {
  const formData = ref<FormData>({ person: { name: "", age: 0 }, childs: [] });
  const dataOnServer = ref<FormData>({
    person: { name: "", age: 0 },
    childs: [],
  });

  return { formData, dataOnServer };
});
