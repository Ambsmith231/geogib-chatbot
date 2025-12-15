<template>
  <section class="container mx-auto px-15 py-15">
    <div class="max-w-4xl mx-auto text-center">
      <h2
        class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance"
      >
        Empowering Digital Innovation in
        <span class="text-orange-600">Liberia</span>
      </h2>
      <p class="text-xl text-gray-600 mb-8 text-pretty">
        Orange Digital Center Liberia is a free training and innovation hub that
        equips young people with digital skills, supports startups, and fosters
        technological innovation across the nation.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
        >
          Get Started
        </button>
        <button
          class="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition border-2 border-orange-600"
        >
          Learn More
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white p-6 rounded-2xl shadow-sm text-center"
      >
        <div class="text-4xl font-bold text-orange-600 mb-2">
          {{ stat.value }}
        </div>
        <div class="text-gray-600">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const stats = ref([
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "Startups Supported" },
  { value: "100%", label: "Free Programs" },
]);
</script>
