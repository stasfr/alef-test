import { defineStore } from "pinia";
import { ref } from "vue";
import FormData from "@/types/formData";

export const useFormStore = defineStore("FormStore", () => {
  const formData = ref<FormData>({ person: { name: "", age: 0 }, childs: [] });

  function saveFormData(inputData: FormData): void {
    formData.value = inputData;
  }

  return { formData, saveFormData };
});
