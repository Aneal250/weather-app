<template>
  <div class="flex items-center">
    <img src="@/assets/search.png" class="h-7 ml-8 absolute" />
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search for a city ..."
      class="py-4 px-6 pl-20 w-full border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
    />
    <img
      src="@/assets/navigation.png"
      class="h-7 -ml-16 border-l border-gray-300 px-4"
    />
  </div>
</template>

<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped></style>
