<template>
  <homePage />
  <skillComponent />
  <aboutSection />
  <contactForm />
  <footerSection />
</template>

<script>
  import contactForm from '@/components/contactForm.vue'
  import footerSection from '@/components/footerSection.vue'
  import homePage from '@/components/homePage.vue'
  import skillComponent from '@/components/skillComponent.vue'
  import aboutSection from '@/components/aboutSection.vue'
  export default {
    name: 'Home',
    components: { contactForm, footerSection, skillComponent, homePage, aboutSection },
};
</script>