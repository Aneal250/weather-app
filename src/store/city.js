import { defineStore } from "pinia";
import { ref } from "vue";

export const useCityStore = defineStore(
  "city",
  () => {
    const cities = ref([]);

    function addCity(payload) {
      if (!payload) return;

      cities.value.push(payload);
    }
    return { cities, addCity };
  },
  { persist: true }
);
