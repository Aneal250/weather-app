<template>
  <header class="sticky top-0">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-black"
    >
      <div class="flex gap-3 flex-1 justify-end">
        <button
          @click="addCity"
          class="bg-yellow px-6 py-2 rounded-b-lg font-semibold"
          v-if="route.query"
        >
          SAVE LOCATION
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { uid } from "uid";
import { useCityStore } from "@/store/city.js";


const route = useRoute();
const router = useRouter();

const cityStore = useCityStore();

const addCity = () => {
  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  cityStore.addCity(locationObj);

  let query = Object.assign({}, route.query);
  delete query.preview;

  router.push("/");
};


</script>

<style lang="scss" scoped>
.bg-yellow {
  background-color: #f7a81b;
}
</style>
