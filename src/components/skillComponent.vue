<template>
    <div class="skill-section mt-20">
    <h4 class="text-3xl text-center font-semibold text-gray-500 w-full mb-20">Skills</h4>
    <div class="row flex flex-col md:flex-row items-center justify-between container mx-auto gap-3 sm-max:gap-3">
      <div class="col w-full flex justify-center gap-10 flex-wrap">
        <template v-for="skill in skills" :key="skill.id">
          <ul class="html-circle bg-orange-500 rounded-full flex items-center justify-center relative group hover:bg-orange-50 text-white hover:text-black" :ref="`circle-${skill.id}`" :data-id="skill.id">
            <li class="text-3xl group-hover:hidden">{{ skill.name }}</li>
            <li class="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">{{ skill.progress }}</li>
          </ul>
        </template>
      </div>
    </div>
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
        }
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
</style>