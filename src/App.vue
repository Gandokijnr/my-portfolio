

<template>
  <header class="bg-black p-6 sticky top-0 z-10">
    <div class="container mx-auto flex justify-between items-center flex-wrap">
    <div class="nav-logo text-orange-500 font-bold text-2xl">
      <router-link to="/">
        Gandoki
      </router-link>
    </div>

    <div class="block md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <nav :class="{ 'hidden': !isMenuOpen }" class="flex gap-4 text-white flex-wrap md:flex">
        <router-link to="/" class="hover:text-orange-500">Home</router-link>
        <router-link to="/about" class="hover:text-orange-500">About</router-link>
        <router-link to="/about" class="hover:text-orange-500">Services</router-link>
        <router-link to="/about" class="hover:text-orange-500">Projects</router-link>
        <router-link to="/about" class="hover:text-orange-500">Contact</router-link>
      </nav>
      <div class="nav-button hidden md:block">
        <button class="bg-orange-500 text-white rounded-full p-2 px-6">Let's Talk</button>
      </div>
      </div>
  </header>

  <RouterView />
</template>

<script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
};
</script>

