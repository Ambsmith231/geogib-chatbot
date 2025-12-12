<template>
  <div class="min-h-screen bg-background text-foreground">
    <nav
      class="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"
      >
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
          >
            <span class="text-primary-foreground font-bold text-sm">CB</span>
          </div>
          <span class="text-xl font-bold">ChartBolt</span>
        </div>
        <div class="hidden md:flex gap-8">
          <button
            @click="currentPage = 'home'"
            :class="
              currentPage === 'home'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            "
          >
            Home
          </button>
          <button
            @click="currentPage = 'about'"
            :class="
              currentPage === 'about'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            "
          >
            About
          </button>
          <button
            @click="currentPage = 'contact'"
            :class="
              currentPage === 'contact'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            "
          >
            Contact
          </button>
        </div>
        <div class="flex gap-3">
          <button
            v-if="isLoggedIn"
            @click="logout"
            class="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary"
          >
            Logout
          </button>
          <button
            v-else
            @click="currentPage = 'login'"
            class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
