<script setup>
// import NavBar from "@/components/NavBar.vue";
// import hero from "@/components/hero.vue";
// import foot from "@/components/foot.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProgramsSection from "@/components/ProgramsSection.vue";
import StatsSection from "@/components/StatsSection.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <!-- <div
    class="min-h-screen w-full bg-cover bg-black/60 bg-blend-overlay"
    :style="{ backgroundImage: `url('/src/image/bg.jpeg')` }"
  >
    <NavBar />
    <hero />

    <foot />
  </div> -->
  <HeroSection />
  <ProgramsSection />
  <StatsSection />
  <AppFooter />
</template>
