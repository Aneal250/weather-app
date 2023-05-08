<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg min-h-screen grid place-items-center">
    <RouterView />
  </div>
</template>

<style scoped>
.bg {
  background-image: linear-gradient(180deg, #2937b3, #187ac8);
}
</style>
