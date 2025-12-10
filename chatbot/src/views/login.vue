<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div class="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 space-y-5">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="loginuse" class="mb-5">Email </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            placeholder="Email "
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label for="password" class="mt6 py-5">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
            autocomplete="current-password"
          />
        </div>

        <div class="mb-5 py-5">
          <button
            type="submit"
            class="w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Log In
          </button>
        </div>
      </form>

      <div class="text-center text-sm">
        <p class="text-gray-500">
          New to GeoGib Chatbot
          <a
            href="/singup"
            class="font-medium text-blue-600 hover:text-blue-700"
          >
            Create an Account
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    user.email == email.value && user.password === password.value
  );

  if (user) {
    localStorage.setItem("currentuser", JSON.stringify(user));
    console.log("successfully login");
  } else {
    console.error("Invaild email or password");
  }
};
</script>
