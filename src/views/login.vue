<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div class="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 space-y-5">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="mb-5">Email </label>
          <input
            v-model="signinData.email"
            id="email"
            name="email"
            type="text"
            required
            placeholder="Email "
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label for="password" class="mt-6 py-5">Password</label>
          <input
            v-model="signinData.password"
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
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
          <router-link
            to="/singup"
            class="font-medium text-blue-600 hover:text-blue-700"
          >
            Create an Account
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import { reactive } from "vue";

const signinData = reactive({
  email: "",
  password: "",
});

// Create the router instance so we can programmatically navigate
const router = useRouter();

const login = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // console.log(users);
  const user = users.find(
    (storeuser) =>
      storeuser.email === signinData.email &&
      storeuser.password === signinData.password
  );

  if (user) {
    localStorage.setItem("currentuser", JSON.stringify(user));
    // console.log("successfully login");
    router.push("/dash");
  } else {
    alert("Incorrect email or password");
  }
};
</script>
