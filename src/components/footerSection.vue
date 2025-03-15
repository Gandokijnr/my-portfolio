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
            Sharing stories that inspire and connect people around the world.
          </p>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Twitter"
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
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Instagram"
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
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 19.5h9a2 2 0 002-2v-9a2 2 0 00-2-2h-9a2 2 0 00-2 2v9a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="#"
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
        <a
          href="#"
          class="bg-orange-500 hover:bg-orange-400 transition-colors p-2 rounded-full text-white"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
