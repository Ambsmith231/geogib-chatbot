<template>
  <section id="programs" class="bg-white py-20">
    <div class="container mx-auto px-6">
      <h3 class="text-4xl font-bold text-center mb-4 text-gray-900">Our Programs</h3>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We offer comprehensive programs designed to build digital skills and foster innovation
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div v-for="program in programs" :key="program.title" 
            class="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="program.icon" />
            </svg>
          </div>
          <h4 class="font-bold text-lg mb-2 text-gray-900">{{ program.title }}</h4>
          <p class="text-gray-600 text-sm">{{ program.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const programs = ref([
  {
    title: 'Coding School',
    description: 'Learn programming and software development',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'FabLab',
    description: 'Digital fabrication and prototyping space',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    title: 'Startup Incubator',
    description: 'Support for tech entrepreneurs and startups',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Job Placement',
    description: 'Connect skilled youth with employment opportunities',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
])
</script>
