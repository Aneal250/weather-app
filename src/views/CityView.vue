<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <p class="text-white">Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "@/components/molecules/AsyncCityView.vue";
</script>
