<script setup>
import NavBar from "@/components/NavBar.vue";
import hero from "@/components/hero.vue";
import foot from "@/components/foot.vue";
// import fbchat from "@/components/fbchat.vue";
import chat from "@/components/chat.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-cover bg-black/60 bg-blend-overlay"
    :style="{ backgroundImage: `url('/src/image/bg.jpeg')` }"
  >
    <NavBar />
    <hero />
    <!-- <fbchat /> -->
    <!-- <chat /> -->
    <foot />
  </div>
</template>
