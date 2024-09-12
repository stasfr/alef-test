import { defineStore } from "pinia";
import { ref } from "vue";
import Child from "@/types/child";
import Person from "@/types/person";
import FormData from "@/types/formData";

export const useFormStore = defineStore("FormStore", () => {
  const data = ref<FormData>({ person: { name: "", age: 0 }, childs: [] });
});
