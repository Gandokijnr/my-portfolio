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
  <div class="about-section w-full mt-20">
    <h4 class="text-3xl text-center font-semibold text-gray-500 w-full mb-20">Services</h4>
  <div class="row flex flex-col md:flex-row items-center justify-between container mx-auto gap-3">
    <div class="col w-full md:w-1/2">
      <img class="w-11/12" src="../assets/aboutsideimage.png" alt="">
    </div>
    <div class="col w-full md:w-1/2 shadow-lg p-4">
      <div class="card">
        <div class="card-body flex flex-col gap-6 w">
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

<div class="skill-section mt-20">
    <h4 class="text-3xl text-center font-semibold text-gray-500 w-full mb-20">Skills</h4>
    <div class="row flex flex-col md:flex-row items-center justify-between container mx-auto gap-3 sm-max:gap-3">
      <div class="col w-full flex justify-center gap-10 flex-wrap">
        <template v-for="skill in skills" :key="skill.id">
          <ul class="html-circle bg-gray-400 rounded-full flex items-center justify-center relative group hover:bg-orange-500" :ref="`circle-${skill.id}`" :data-id="skill.id">
            <li class="text-3xl group-hover:hidden">{{ skill.name }}</li>
            <li class="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">{{ skill.progress }}</li>
          </ul>
        </template>
      </div>
    </div>
  </div>

  <div class="contact-section mt-20">
    <h4 class="text-3xl text-center font-semibold text-gray-500 w-full pt-20">Book A Call</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { id: 1, name: 'CSS', progress: '80%' },
        { id: 2, name: 'Bootstrap', progress: '80%' },
        { id: 3, name: 'Tailwind CSS', progress: '80%'},
        { id: 4, name: 'Vue.js', progress: '80%'},
        { id: 5, name: 'MySQL', progress: '80%'},
        { id: 6, name: 'PHP', progress: '60%' },
        { id: 7, name: 'HTML', progress: '90%'}
      ]
    };
  },
  mounted() {
    this.skills.forEach(skill => {
      const el = this.$refs[`circle-${skill.id}`][0];
      this.applyAnimation(el);
    });
  },
  methods: {
    applyAnimation(el) {
      const duration = Math.random() * 5 + 3; 
      const delay = Math.random() * 3;
      const direction = Math.random() > 0.5 ? 'normal' : 'reverse'; 
      const timingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';

      el.style.animation = `move-${el.dataset.id} ${duration}s ${timingFunction} infinite ${direction}`;
      el.style.animationDelay = `${delay}s`;

      // Define the animation keyframes
      const keyframes = `
        @keyframes move-${el.dataset.id} {
          0% { transform: translateY(0); }
          20% { transform: translateY(2em); }
          40% { transform: translateX(-2em); }
          60% { transform: translateX(2em); }
          80% { transform: translateX(-2em); }
          100% { transform: translateY(2em); }
        }
      `;

      // Add the keyframes to the document's styles
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }
};
</script>


<style scoped>

.html-circle{
  min-width: 30vh;
  min-height: 30vh;
}
@media (max-width: 767px){
 .html-circle{
      min-width: 20vh;
      min-height: 20vh;
    }
}
main {
  background-image: url('../assets/background.png');
  background-position: center;
  background-size: cover;
  min-height: 80vh;
}

.contact-section{
  background-image: url('../assets/callsection.png');
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

/* smooth bouncing  animation for the page image */

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
