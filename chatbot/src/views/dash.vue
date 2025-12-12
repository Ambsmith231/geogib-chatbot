<template>
  <div
    class="h-screen w-full bg-indigo-950 flex flex-col justify-center items-center relative text-gray-200 p-8"
  >
    <div class="text-center max-w-2xl">
      <h1 class="text-6xl font-extrabold mb-4 text-orange-400">
        Welcome to ODC Liberia
      </h1>

      <p class="text-2xl font-light text-cyan-400 mb-8">
        Innovation, technology, and entrepreneurship powered by Orange Digital
        Center.
      </p>

      <p class="text-lg text-gray-400">Start your learning journey now.</p>
    </div>

    <button
      @click="openGeogibChat"
      class="fixed bottom-8 right-8 p-4 md:p-5 rounded-full text-indigo-900 font-bold text-lg bg-orange-400 shadow-2xl shadow-orange-500/70 hover:bg-orange-300 transition duration-300 transform hover:scale-105"
      aria-label="Chat with Geogib"
    >
      💬 Chat with ODC GeoGib chatbot for help
    </button>

    <div
      v-if="isChatOpen"
      class="fixed bottom-24 right-8 w-80 h-96 bg-indigo-900 rounded-lg shadow-xl border-t-4 border-cyan-400 p-4"
    >
      <div class="text-cyan-400 font-semibold mb-2">ODC Geogib Chatbot</div>
      <p class="text-sm text-gray-300">
        chat with the ODC GeoGib chatb for help
      </p>
      <button
        @click="openGeogibChat"
        class="absolute top-2 right-2 text-gray-400 hover:text-orange-400"
      >
        closes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AMb",
  data() {
    return {
      isChatOpen: false,
    };
  },
  methods: {
    openGeogibChat() {
      this.isChatOpen = !this.isChatOpen;
      console.log("Geogib Chat is open", this.isChatOpen);
    },
  },
};
</script>
