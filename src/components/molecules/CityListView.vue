<template>
  <h2 class="text-center text-white text-2xl py-4">Saved Cities</h2>
  <div class="flex flex-wrap gap-4">
    <div v-for="city in cityStore.cities" :key="city.id">
      <CityCard :city="city" @click="goToCityView(city)" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import CityCard from "@/components/atom/CityCard.vue";
import { useCityStore } from "../../store/city";

const cityStore = useCityStore();

cityStore.cities;

const savedCities = ref([]);
const getCities = async () => {
  if (cityStore.cities) {
    // savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
    const requests = [];
    cityStore.cities.forEach((city) => {
      requests.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lng}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=imperial`
        )
      );
    });
    const weatherData = await Promise.all(requests);
    weatherData.forEach((value, index) => {
      cityStore.cities[index].weather = value.data;
    });
  }
};
await getCities();
const router = useRouter();
const goToCityView = (city) => {
  router.push({
    name: "cityView",
    params: { state: city.state, city: city.city },
    query: {
      lat: city.coords.lat,
      lng: city.coords.lng,
    },
  });
};
</script>
