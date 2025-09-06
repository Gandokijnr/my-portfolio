<template>
  <section class="skills-section py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
    
    <div class="container mx-auto px-4 relative">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-orange-700 rounded-full text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Technical Expertise
        </div>
        <h2 class="text-4xl md:text-5xl font-bold bg-orange-600 bg-clip-text text-transparent mb-6">
          Skills & Technologies
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A comprehensive overview of my technical proficiency across various technologies and frameworks
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="(skill, index) in skills"
          :key="skill.id"
          class="skill-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          :class="{ 'opacity-0 translate-y-8': !isVisible }"
          :style="{ animationDelay: `${index * 100}ms` }"
          @mouseenter="activateSkill(skill.id)"
          @mouseleave="deactivateSkill"
          @keydown="handleKeyDown($event, skill.id)"
          :aria-label="`${skill.name} skill: ${skill.progress} proficiency`"
          tabindex="0"
          role="button"
        >
          <!-- Gradient border effect -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
               :style="{ background: `linear-gradient(135deg, ${skill.colorHex}20, ${skill.colorHex}40)` }"></div>
          
          <!-- Skill Icon -->
          <div class="flex justify-center mb-6">
            <div class="relative">
              <div class="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                   :style="{ backgroundColor: `${skill.colorHex}15` }">
                <div class="text-3xl" v-html="skill.icon"></div>
              </div>
              <!-- Progress ring -->
              <svg class="absolute -inset-2 w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" stroke-width="2"/>
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  :stroke="skill.colorHex" 
                  stroke-width="3"
                  stroke-linecap="round"
                  :stroke-dasharray="283"
                  :stroke-dashoffset="283 - (283 * parseInt(skill.progress)) / 100"
                  class="transition-all duration-1000 ease-out"
                />
              </svg>
            </div>
          </div>

          <!-- Skill Info -->
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
              {{ skill.name }}
            </h3>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              {{ skill.description }}
            </p>
            
            <!-- Progress Bar -->
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-700">Proficiency</span>
                <span class="font-bold" :style="{ color: skill.colorHex }">{{ skill.progress }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  :style="{
                    backgroundColor: skill.colorHex,
                    width: isVisible ? skill.progress : '0%',
                  }"
                >
                  <div class="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hover overlay -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
               :style="{ background: `linear-gradient(135deg, ${skill.colorHex}, transparent)` }"></div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="text-center mt-16">
        <p class="text-gray-600 mb-6">Interested in working together?</p>
        <a href="https://www.linkedin.com/in/abah-gideon/" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          Let's Connect
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const activeSkill = ref(null);
const isVisible = ref(false);

const skills = ref([
  {
    id: 1,
    name: "HTML5",
    progress: "90%",
    colorHex: "#E34F26",
    description: "Semantic markup, accessibility, and modern web standards",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #E34F26">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>`,
  },
  {
    id: 2,
    name: "CSS3",
    progress: "85%",
    colorHex: "#1572B6",
    description: "Advanced styling, animations, and responsive design",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #1572B6">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>`,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    progress: "88%",
    colorHex: "#06B6D4",
    description: "Utility-first framework for rapid UI development",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #06B6D4">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>`,
  },
  {
    id: 4,
    name: "Vue.js",
    progress: "82%",
    colorHex: "#4FC08D",
    description: "Progressive JavaScript framework for building UIs",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #4FC08D">
      <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
    </svg>`,
  },
  {
    id: 5,
    name: "JavaScript",
    progress: "87%",
    colorHex: "#F7DF1E",
    description: "Modern ES6+ features and asynchronous programming",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #F7DF1E">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>`,
  },
  {
    id: 6,
    name: "Firebase",
    progress: "78%",
    colorHex: "#FFCA28",
    description: "Backend-as-a-Service platform for web and mobile apps",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #FFCA28">
      <path d="M5.229 7.429l1.677-3.228c.184-.353.672-.353.856 0l1.677 3.228-2.105 3.83-2.105-3.83zm-.842 1.54L1.04 18.5c-.161.294.071.66.428.66.119 0 .238-.034.342-.103L12 14.5l-7.613-5.531zm14.155-5.69c.184-.353.672-.353.856 0L21.96 8.97c.161.294-.071.66-.428.66-.119 0-.238-.034-.342-.103L12 4.97l6.542-1.691z"/>
      <path d="M12 4.97L5.458 9.527l6.542 4.973 6.542-4.973L12 4.97z" opacity="0.6"/>
    </svg>`,
  },
  {
    id: 7,
    name: "MySQL",
    progress: "78%",
    colorHex: "#4479A1",
    description: "Database design, optimization, and management",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #4479A1">
      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.002c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.384 3.564.423 5.53zM9.294 15.772c-.604-.85-1.27-1.704-1.927-2.474-.657-.77-1.292-1.45-1.85-2.043v4.517h-.93V9.264h.854c.11.015.2.052.274.115.015.015.027.032.038.05.329.468.696.992 1.098 1.582.402.59.818 1.177 1.235 1.747.364-.333.718-.687 1.062-1.062.344-.375.674-.774.987-1.197.313-.423.612-.87.896-1.34.284-.47.55-.967.798-1.494h.93v7.508h-.93v-4.517l-.274.333c-.145.163-.296.337-.451.522-.155.185-.316.384-.49.598-.174.214-.361.452-.562.713-.201.261-.42.548-.663.862-.242.314-.513.651-.812 1.01-.299.359-.641.738-1.027 1.138z"/>
    </svg>`,
  },
  {
    id: 8,
    name: "Bootstrap",
    progress: "80%",
    colorHex: "#7952B3",
    description: "Responsive component library and grid system",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #7952B3">
      <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572z"/>
      <path d="M21.356 0H2.644C1.184 0 0 1.184 0 2.644v18.712C0 22.816 1.184 24 2.644 24h18.712C22.816 24 24 22.816 24 21.356V2.644C24 1.184 22.816 0 21.356 0zM11.89 15.931H6.634V6.709h5.256c2.391 0 3.681.989 3.681 2.804 0 1.235-.81 2.084-1.97 2.298v.032c1.441.174 2.448 1.107 2.448 2.602 0 1.970-1.415 3.486-4.159 3.486zm-.156-7.49H9.956v2.615h1.778c1.235 0 1.970-.522 1.970-1.466 0-.944-.735-1.149-1.97-1.149z"/>
    </svg>`,
  },
  {
    id: 9,
    name: "Nuxt.js",
    progress: "75%",
    colorHex: "#00DC82",
    description: "Full-stack Vue framework for production-ready apps",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #00DC82">
      <path d="M6.61 21L.84 10.8A1.68 1.68 0 0 1 2.4 8.4h3.36c.67 0 1.29.35 1.63.92L12 18.48l4.61-9.16c.34-.57.96-.92 1.63-.92h3.36c1.02 0 1.68 1.08 1.2 1.96L17.39 21c-.34.57-.96.92-1.63.92H8.24c-.67 0-1.29-.35-1.63-.92z"/>
      <path d="M12 2.4L8.4 8.4h7.2L12 2.4z" opacity="0.4"/>
    </svg>`,
  },
  {
    id: 10,
    name: "Git",
    progress: "85%",
    colorHex: "#F05032",
    description: "Version control system for tracking code changes",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #F05032">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>`,
  },
  {
    id: 11,
    name: "WordPress",
    progress: "80%",
    colorHex: "#21759B",
    description: "Content management system and custom theme development",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" style="color: #21759B">
      <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.105l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-.963 0-1.641.84-1.641 1.742 0 .811.467 1.499.963 2.31.375.645.81 1.474.81 2.67 0 .811-.312 1.756-.735 3.08L16.469 6.825zM12 2.988c-.264 0-.52.011-.776.022L15.17 21.012c1.9-1.099 3.201-3.129 3.201-5.988 0-1.659-.645-3.197-1.694-4.312L12 2.988zM2.723 12c0-3.73 2.184-6.983 5.349-8.535L1.946 18.403C2.295 16.388 2.723 14.259 2.723 12z"/>
    </svg>`,
  },
]);

const activateSkill = (id) => {
  activeSkill.value = id;
};

const deactivateSkill = () => {
  activeSkill.value = null;
};

// Enhanced animation with intersection observer for better performance
onMounted(() => {
  nextTick(() => {
    setupIntersectionObserver();
  });
});

const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          animateSkillCards();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
};

const animateSkillCards = () => {
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("opacity-100", "animate-fade-in-up");
      card.classList.remove("opacity-0", "translate-y-8");
    }, 150 * index);
  });
};

// Keyboard navigation support
const handleKeyDown = (event, skillId) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    activateSkill(skillId);
  }
};
</script>

<style scoped>
/* Custom animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

/* Grid background pattern */
.bg-grid-slate-100 {
  background-image: 
    linear-gradient(to right, #f1f5f9 1px, transparent 1px),
    linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
  background-size: 2rem 2rem;
}

/* Enhanced card styles */
.skill-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.skill-card:hover {
  transform: translateY(-0.5rem) scale(1.02);
}

.skill-card:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Progress ring animation */
.skill-card svg circle:last-child {
  transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glassmorphism effect */
.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  border-radius: 1rem;
  pointer-events: none;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .skill-card {
    padding: 1.25rem;
  }
  
  .skill-card h3 {
    font-size: 1.125rem;
  }
  
  .skill-card p {
    font-size: 0.875rem;
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .skill-card {
    padding: 1rem;
  }
  
  .w-20 {
    width: 4rem;
    height: 4rem;
  }
  
  .w-24 {
    width: 5rem;
    height: 5rem;
  }
}

/* Smooth focus transitions */
.skill-card:focus-visible {
  transform: translateY(-0.25rem);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Button hover effects */
button:hover {
  transform: translateY(-2px) scale(1.05);
}

button:active {
  transform: translateY(0) scale(1.02);
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .animate-fade-in-up,
  button {
    animation: none;
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .skill-card {
    border: 2px solid #000;
    background: #fff;
  }
  
  .bg-gradient-to-br {
    background: #fff;
  }
}
</style>
