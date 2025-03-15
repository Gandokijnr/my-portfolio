<template>
  <section class="skills-section py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">
        My Skills
      </h2>
      <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        These are the technologies I've worked with and my proficiency level in
        each one.
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="skill-card flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg bg-white border border-gray-100"
          :class="{ 'opacity-0 translate-y-4': !isVisible }"
        >
          <div
            class="skill-circle mb-4 relative cursor-pointer transition-all duration-500"
            :style="{ boxShadow: `0 0 0 2px ${skill.colorHex}` }"
            @mouseenter="activateSkill(skill.id)"
            @mouseleave="deactivateSkill"
          >
            <div
              class="w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden"
            >
              <div
                class="skill-progress absolute inset-0 rounded-full transition-all duration-700 ease-out"
                :style="{
                  backgroundColor: skill.colorHex,
                  clipPath: `inset(${100 - parseInt(skill.progress)}% 0 0 0)`,
                }"
              ></div>

              <div
                class="skill-icon z-10 bg-white rounded-full w-28 h-28 flex items-center justify-center transition-all duration-300"
              >
                <span
                  class="text-2xl font-bold"
                  :style="{ color: skill.colorHex }"
                  >{{ skill.name }}</span
                >
              </div>

              <div
                class="skill-percentage absolute inset-0 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-300"
                :class="{ 'opacity-100': activeSkill === skill.id }"
              >
                <span
                  class="text-3xl font-bold"
                  :style="{ color: skill.colorHex }"
                  >{{ skill.progress }}</span
                >
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-600 text-center mt-2">{{ skill.description }}</p>

          <div class="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div
              class="h-2 rounded-full transition-all duration-1000 ease-out"
              :style="{
                backgroundColor: skill.colorHex,
                width: skill.progress,
              }"
            ></div>
          </div>
        </div>
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
    name: "HTML",
    progress: "90%",
    colorHex: "#F97316", // orange-500
    description: "Semantic markup and accessibility",
  },
  {
    id: 2,
    name: "CSS",
    progress: "80%",
    colorHex: "#3B82F6", // blue-500
    description: "Styling and responsive design",
  },
  {
    id: 3,
    name: "Tailwind",
    progress: "80%",
    colorHex: "#14B8A6", // teal-500
    description: "Utility-first CSS framework",
  },
  {
    id: 4,
    name: "Bootstrap",
    progress: "80%",
    colorHex: "#8B5CF6", // purple-500
    description: "Component-based framework",
  },
  {
    id: 5,
    name: "Vue.js",
    progress: "80%",
    colorHex: "#22C55E", // green-500
    description: "Progressive JavaScript framework",
  },
  {
    id: 6,
    name: "MySQL",
    progress: "80%",
    colorHex: "#2563EB", // blue-600
    description: "Relational database management",
  },
  {
    id: 7,
    name: "PHP",
    progress: "60%",
    colorHex: "#6366F1", // indigo-500
    description: "Server-side scripting language",
  },
  {
    id: 8,
    name: "JavaScript",
    progress: "85%",
    colorHex: "#EAB308", // yellow-500
    description: "Client-side programming",
  },
]);

const activateSkill = (id) => {
  activeSkill.value = id;
};

const deactivateSkill = () => {
  activeSkill.value = null;
};

// Animation for staggered appearance of skill cards
onMounted(() => {
  nextTick(() => {
    isVisible.value = true;
    animateSkillCards();
  });
});

const animateSkillCards = () => {
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("opacity-100");
      card.classList.remove("opacity-0", "translate-y-4");
    }, 100 * index);
  });
};
</script>

<style scoped>
.skill-card {
  transition: all 0.5s ease-out;
}

.skill-circle:hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .skill-circle {
    width: 100px;
    height: 100px;
  }
  .skill-icon {
    width: 90px;
    height: 90px;
  }
}
</style>
