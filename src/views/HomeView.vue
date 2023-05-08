<template>
  <div class="md:container px-4">
    <SearchForm />
    <div class="flex flex-col gap-4">
      <Suspense>
        <CityListView />
        <template #fallback>
          <p class="text-white">Loading...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import SearchForm from "@/components/molecules/SearchForm.vue";
import CityListView from "@/components/molecules/CityListView.vue";
</script>

<style lang="scss" scoped></style>
