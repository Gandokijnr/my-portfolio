<template>
  <footer class="bg-black text-white py-12">
    <div class="container mx-auto px-4">
      <!-- Main Footer Content -->
      <div
        class="flex flex-col md:flex-row justify-between items-center md:items-start mb-8"
      >
        <!-- Logo & About -->
        <div class="mb-6 md:mb-0">
          <a
            href="/"
            class="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors"
            >Gandoki</a
          >
          <p class="mt-3 text-gray-400 max-w-xs">
            Abah Gideon - Expert Frontend Developer & Digital Marketer creating innovative web solutions and driving digital growth.
          </p>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <div class="flex space-x-4">
            
           
            <a
              href="https://www.facebook.com/abah.gideon.7"
              class="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abah-gideon/"
              class="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke-width="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 my-6"></div>

      <!-- Bottom Footer -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          Copyright © Gandoki {{ currentYear }}. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a
            href="/privacy"
            class="text-sm text-gray-400 hover:text-orange-500 transition-colors"
            >Privacy Policy</a
          >
          <a
            href="/terms"
            class="text-sm text-gray-400 hover:text-orange-500 transition-colors"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
