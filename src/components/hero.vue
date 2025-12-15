<template>
  <div class="grid w-100 h-autoo">
    <div class="font-bold text-3xl text-white">
      <h1 class="mt-8 mb-6 p-5 text-blue-200">Welcome to GeoGib Chatbot</h1>
    </div>
    <div class="text-2xl rounded w-130 p-4 text-white bg-linear-to-r from-orange-500">
      <p class="text-blue-200">
        <span class="text-black font-weight-200 text-4xl">O</span>range <span class="text-black font-bold text-4xl">D</span>igital <span class="text-black font-bold text-4xl">C</span>enter <span class="bg-black p-1 md:font-bold rounded-full font-bold text-orange-400">(ODC)</span> <br /> <br />
        A place where visions are enligtened <br />
        <span>Misions are structured</span> <br />
        <span>Goals are become reality</span> 
      </p>
    </div>
    <div class="flex justify-between items-center p-5">
      <a href="#">
        <button class="border border-blue-200 px-4 py-2 rounded text-blue-200 cursor-pointer hover:bg-blue-950/90 hover:text-blue-200 hover:scale-105 duration-300 ease-out">
          Let's Chat
        </button>
      </a>
    </div>
    <div class="bg-orange-500 backdrop:blur-2xl p-2 rounded-full fixed bottom-20 right-9 z-50">
      <a href="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/11/15/20251211153121-932FCRJ8.json&_gl=1*h7tkog*_gcl_au*NjA3MTUxMDIwLjE3NjU0NjY5NTkuMTYwNjkyODkxNS4xNzY1NDY3MDIyLjE3NjU0NjcwNTU.*_ga*OTQyODY5NTYxLjE3NjU0NjY5NjA.*_ga_HKHSWES9V9*czE3NjU0NzAwMjYkbzIkZzEkdDE3NjU0NzE2NTAkajIwJGwwJGgxOTY5MzI2Mzgw">
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
