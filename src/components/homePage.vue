<template>
      <main id="top" class="animate-slide-in">
    <div class="main-container">
      <div class="row flex flex-col md:flex-row justify-between items-center container mx-auto p-4 py-12">
        <div class="col flex flex-col gap-4 md:w-1/2">
          <div>
            <h1 class="font-semibold text-4xl md:text-5xl">Hello, I'm</h1>
            <p class="font-semibold text-5xl md:text-7xl">Gandoki Jr a</p>
          </div>
          <p class="font-semibold text-4xl md:text-5xl">UI/UX Designer / Frontend Developer</p>
          <p class="text-lg md:text-xl">Passionate UI/UX designer crafting seamless digital experiences. Innovative problem solver with a keen eye for aesthetics and user-centric design.</p>
          <div>
            <button class="bg-orange-500 text-white rounded-full p-2 px-6">Download CV</button>
          </div>
          </div>
        <div class="col md:w-1/2 bouncing">
          <img class="w-full" src="../assets/backgroundimage.png" alt="">
        </div>
      </div>
      
    </div>
    <!-- Indicator Image -->
    <div class="mx-9 hidden md:block">
      <img src="../assets/indicator.png" alt="">
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url('../assets/background.png');
  background-position: center;
  background-size: cover;
  min-height: 80vh;
}

/* smooth fade in animation for the page */
  @keyframes slide-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.animate-slide-in {
  animation: slide-in 2s ease-in-out;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.bouncing {
  animation: bounce 4s infinite ease-in-out;
}
</style>