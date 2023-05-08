import { defineStore } from "pinia";
import { ref } from "vue";

export const useCityStore = defineStore(
  "city",
  () => {
    const cities = ref([]);

    if (localStorage.getItem("city")) {
      cities.value = JSON.parse(localStorage.getItem("savedCities"));
    }

    function addCity(payload) {
      if (!payload) return;

      cities.value.push(payload);
    }
    return { cities, addCity };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: "city",
          storage: localStorage,
        },
      ],
    },
  }
);
