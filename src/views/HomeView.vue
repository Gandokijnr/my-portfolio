<template>
  <main class="animate-slide-in">
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
  <div class="about-section">
  <div class="row flex flex-col md:flex-row items-center justify-between container mx-auto gap-3">
    <div class="col w-full md:w-1/2">
      <img class="w-full md:w-auto" src="../assets/aboutimage.png" alt="">
    </div>
    <div class="col w-full md:w-1/2 shadow-lg p-4">
      <div class="card">
        <div class="card-body flex flex-col gap-6">
          <h1 class="card-title text-4xl">Designing Solutions Not Just Visuals</h1>
          <p class="card-text">Passionate UI/UX designer dedicated to creating seamless, user-centric digital experiences. With a keen eye for aesthetics and a problem-solving mindset, I thrive on transforming complex ideas into visually appealing and functionally efficient designs. Committed to staying ahead of industry trends, I craft meaningful interfaces that resonate with users.</p>
          <div class="card bg-orange-500 p-4 rounded-3xl">
            <div class="card-body">
              <h1 class="card-title text-2xl text-white mb-4">Completed Project</h1>
              <p class="card-img flex justify-between flex-wrap gap-4">
                <img src="../assets/projectone.png" class="hover: cursor-pointer" alt="">
                <img src="../assets/projectone.png" class="hover: cursor-pointer" alt="">
                <img src="../assets/projectone.png" class="hover: cursor-pointer" alt="">
                <img src="../assets/projectone.png" class="hover: cursor-pointer" alt="">
              </p>
            </div>
          </div>
          <div>
            <h1 class="card-title text-4xl">Utilized Technology</h1>
            <p class="card-text">Passionate UI/UX designer dedicated to creating seamless, user-centric digital experiences. With a keen eye for aesthetics and a problem-solving mindset, I thrive on transforming complex ideas into visually appealing and functionally efficient designs. Committed to staying ahead of industry trends, I craft meaningful interfaces that resonate with users.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<hr />
<div class="skills-progressive-bar container mx-auto flex flex-col gap-3 mt-3 p-4">
  <h3 class="text-center text-3xl">Skills</h3>
    <div class="skill font-semibold mt-4 text-2xl" v-for="(skill, index) in skills" :key="index">
      <div class="flex justify-between">
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-progress">{{ skill.progress }}</div>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: skill.progress }"></div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', progress: '90%' },
        { name: 'CSS', progress: '85%' },
        { name: 'Bootstrap', progress: '85%' },
        { name: 'TailwindCSS', progress: '85%' },
        { name: 'UI/UX', progress: '85%' },
        { name: 'MySQL', progress: '85%' }
      ]
    };
  }
};
</script>

<style scoped>
main {
  background-image: url('../assets/background.png');
  background-position: center;
  background-size: cover;
  min-height: 80vh;
}

.progress-bar {
    background-color: #ddd;
    height: 20px;
    border-radius: 5px;
  }

  .progress {
    height: 100%;
    background-color: #ED6400; /* Change color as needed */
    border-radius: 5px;
  }

  @keyframes slide-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 2s ease-out;
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
  animation: bounce 2s infinite ease-in-out;
}
</style>
