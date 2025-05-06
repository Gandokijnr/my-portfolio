<template>
  <div class="container mx-auto p-8">
  <header class="bg-black p-4 md:p-6 sticky top-0 z-50 shadow-md rounded-full py-8">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="nav-logo text-orange-500 font-bold text-2xl">
        <router-link to="/"> Gandoki </router-link>
      </div>

      <!-- CTA Button -->
      <div class="hidden md:block">
        <a
          href="https://api.whatsapp.com/send?phone=2347019727419"
          target="_blank"
          class="bg-orange-500 text-white font-semibold rounded-full py-2 px-6 shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
        >
          Let's Talk
        </a>
      </div>
    </div>
  </header>

  <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>

<style scoped>
header {
  transition: background 0.3s ease-in-out;
}
</style>
