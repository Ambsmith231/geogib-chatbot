<template>
  <div class="grid p-20">
    <div class="font-bold text-3xl text-white">
      <h1 class="mt-20 mb-5 p-5">Welcome to GeoGib Chatbot</h1>
    </div>
    <div class="text-2xl rounded w-130 p-5 text-white bg-orange-500">
      <p>
        <span class="text-black font-bold text-5xl">O</span>range Digital Center <span class="bg-black p-1 rounded-full font-bold">(ODC)</span> <br />
        A place where visions are enligtened <br />
        <span>Misions is struction</span> <br />
        <span>Goals are become reality</span> 
      </p>
    </div>
    <div class="flex justify-between items-center p-5">
      <a href="login">
        <button
          class="border border-white text-white hover:bg-blue-100 hover:text-white px-4 py-2 rounded"
        >
          Singin to Get Start Now
        </button>
      </a>
    </div>
    <div class="fixed bottom-25 right-9 z-50">
      <a
        href="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/11/15/20251211153121-932FCRJ8.json&_gl=1*h7tkog*_gcl_au*NjA3MTUxMDIwLjE3NjU0NjY5NTkuMTYwNjkyODkxNS4xNzY1NDY3MDIyLjE3NjU0NjcwNTU.*_ga*OTQyODY5NTYxLjE3NjU0NjY5NjA.*_ga_HKHSWES9V9*czE3NjU0NzAwMjYkbzIkZzEkdDE3NjU0NzE2NTAkajIwJGwwJGgxOTY5MzI2Mzgw"
      >
        <img
          class="h-20 w-auto rounded-4xl"
          src="/src/image/chat.png"
          alt="chat with an AI"
        />
        <fbchat />
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
