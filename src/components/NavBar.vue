<template>
  <div class="">
    <nav class="bg-blue-950 flex justify-between px-2 text-2xl text-bold text-white gap-2">
      <div class="py-5 text-[11px]">
        <button class="uppercase text-sm cursor-pointer hover:bg-blue-950/90 text-blue-200 hover:text-blue-200 hover:scale-105 duration-300 ease-out ml- px-2 py-1 md:px-2 md:py-1 rounded-2xl">🏠 Home</button>
      </div>
      <div class="flex justify-between gap-7 py-5 px-4 text-[11px]">
        <a href="login">
          <button class="uppercase border-2 border-blue-200 text-blue-200 cursor-pointer hover:bg-blue-950/90 hover:text-blue-200 hover:scale-105 duration-300 ease-out px-2 py-1 md:px-2 md:py-1 rounded-2xl">
            login
          </button>
        </a>

        <a href="singup">
          <button class="uppercase border-2 border-blue-200 text-blue-200 cursor-pointer hover:bg-blue-950/90 hover:text-blue-200 hover:scale-105 duration-300 ease-out px-2 py-1 md:px-2 md:py-1 rounded-2xl">
            Sigup
          </button>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
