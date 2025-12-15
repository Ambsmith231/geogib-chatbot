<template>
  <section class="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        <div v-for="stat in stats" :key="stat.label" class="space-y-2">
          <div class="text-4xl md:text-5xl font-bold">{{ stat.value }}</div>
          <div class="text-orange-100 text-sm md:text-base">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const stats = ref([
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "Programs Offered" },
  { value: "20+", label: "Partner Companies" },
  { value: "100%", label: "Free Access" },
]);
</script>
