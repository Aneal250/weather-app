<template>
  <div class="bg-gray-900/50 px-6 py-2 cursor-pointer">
    <h2 class="md:text-3xl text-xl text-white px-4">
      {{ city.city }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});
</script>
