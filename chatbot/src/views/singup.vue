<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <div
      class="w-full max-w-lg bg-white rounded-xl shadow-2xl p-10 space-y-8 border border-gray-100"
    >
      <h2 class="text-4xl font-extrabold text-gray-900 text-center">
        Join the Chat
      </h2>
      <p class="text-center text-gray-600">
        Create your new account to start with the ODC GeoGib ChatBot.
      </p>

      <form @submit.prevent="singup" class="space-y-6">
        <div>
          <label
            for="username"
            class="text-sm font-semibold text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            placeholder="username"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
          />
        </div>

        <div>
          <label for="email" class="text-sm font-semibold text-gray-700 mb-1">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="name@example.com"
          />
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="new-password"
            required
            class="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="Must be at least 6 characters"
          />
        </div>

        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-bold text-white bg-purple-600 hover:bg-purple-700"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div class="text-center pt-4">
        <p class="text-sm text-gray-600">
          i have an Account
          <a
            href="/login"
            class="font-bold text-purple-600 hover:text-purple-700"
          >
            Sign in here
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

const singup = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existinguser = users.find((user) => user.email === email.value);

  if (existinguser) {
    console.log(" have an account");
  } else {
    users.push({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    localStorageg.setItem("users", JSON.stringify(users));
    console.log("account was created");
  }
};
</script>
