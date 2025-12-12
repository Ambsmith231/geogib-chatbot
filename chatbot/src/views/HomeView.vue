<script setup>
import NavBar from "@/components/NavBar.vue";
import hero from "@/components/hero.vue";
import foot from "@/components/foot.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-cover bg-black/60 bg-blend-overlay"
    :style="{ backgroundImage: `url('/src/image/bg.jpeg')` }"
  >
    <NavBar />
    <hero />

    <foot />
  </div>
</template>
