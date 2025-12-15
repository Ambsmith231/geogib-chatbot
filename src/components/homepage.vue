<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 to-white font-sans">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold text-xl">O</span>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">
                Orange Digital Center
              </h1>
              <p class="text-xs text-orange-600">Liberia</p>
            </div>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a
              href="#about"
              class="text-gray-700 hover:text-orange-600 transition"
              >About</a
            >
            <a
              href="#programs"
              class="text-gray-700 hover:text-orange-600 transition"
              >Programs</a
            >
            <a
              href="#contact"
              class="text-gray-700 hover:text-orange-600 transition"
              >Contact</a
            >
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance"
        >
          Empowering Digital Innovation in
          <span class="text-orange-600">Liberia</span>
        </h2>
        <p class="text-xl text-gray-600 mb-8 text-pretty">
          Orange Digital Center Liberia is a free training and innovation hub
          that equips young people with digital skills, supports startups, and
          fosters technological innovation across the nation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
          <button
            class="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition border-2 border-orange-600"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- Stats -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
      >
        <div class="bg-white p-6 rounded-2xl shadow-sm text-center">
          <div class="text-4xl font-bold text-orange-600 mb-2">500+</div>
          <div class="text-gray-600">Students Trained</div>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm text-center">
          <div class="text-4xl font-bold text-orange-600 mb-2">50+</div>
          <div class="text-gray-600">Startups Supported</div>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm text-center">
          <div class="text-4xl font-bold text-orange-600 mb-2">100%</div>
          <div class="text-gray-600">Free Programs</div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section id="programs" class="bg-white py-20">
      <div class="container mx-auto px-6">
        <h3 class="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Programs
        </h3>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer comprehensive programs designed to build digital skills and
          foster innovation
        </p>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <div
            class="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition"
          >
            <div
              class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h4 class="font-bold text-lg mb-2 text-gray-900">Coding School</h4>
            <p class="text-gray-600 text-sm">
              Learn programming and software development
            </p>
          </div>

          <div
            class="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition"
          >
            <div
              class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 class="font-bold text-lg mb-2 text-gray-900">FabLab</h4>
            <p class="text-gray-600 text-sm">
              Digital fabrication and prototyping space
            </p>
          </div>

          <div
            class="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition"
          >
            <div
              class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 class="font-bold text-lg mb-2 text-gray-900">
              Startup Incubator
            </h4>
            <p class="text-gray-600 text-sm">
              Support for tech entrepreneurs and startups
            </p>
          </div>

          <div
            class="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition"
          >
            <div
              class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 class="font-bold text-lg mb-2 text-gray-900">Job Placement</h4>
            <p class="text-gray-600 text-sm">
              Connect skilled youth with employment opportunities
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div
                class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"
              >
                <span class="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h3 class="font-bold">Orange Digital Center</h3>
                <p class="text-sm text-gray-400">Liberia</p>
              </div>
            </div>
            <p class="text-gray-400 text-sm">
              Empowering the next generation of digital innovators in Liberia.
            </p>
          </div>

          <div>
            <h4 class="font-bold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" class="hover:text-orange-500 transition"
                  >About Us</a
                >
              </li>
              <li>
                <a href="#programs" class="hover:text-orange-500 transition"
                  >Programs</a
                >
              </li>
              <li>
                <a href="#contact" class="hover:text-orange-500 transition"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4">Contact</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>Monrovia, Liberia</li>
              <li>info@orangedigitalcenter.lr</li>
              <li>+231 XXX XXXX</li>
            </ul>
          </div>
        </div>

        <div
          class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; 2025 Orange Digital Center Liberia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
