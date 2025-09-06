<template>
  <div class="app-container min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="fixed inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,rgba(255,255,255,0.15))] -z-10"></div>
    
    <!-- Floating orbs for visual interest -->
    <div class="fixed top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob -z-10"></div>
    <div class="fixed top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 -z-10"></div>
    <div class="fixed -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 -z-10"></div>

    <!-- Navigation Header -->
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      :class="{ 'backdrop-blur-md bg-white/80 shadow-lg': isScrolled, 'bg-transparent': !isScrolled }"
    >
      <nav class="container mx-auto px-4 py-4 md:px-6 md:py-6">
        <div class="flex justify-between items-center">
          <!-- Logo with enhanced styling -->
          <div class="nav-logo group">
            <router-link 
              to="/" 
              class="flex items-center gap-3 text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent hover:from-orange-700 hover:to-amber-700 transition-all duration-300"
              aria-label="Gandoki - Home"
            >
              <div class="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <span class="text-white font-bold text-lg">G</span>
              </div>
              <span class="hidden sm:block">Gandoki</span>
            </router-link>
          </div>

          <!-- Desktop Navigation Menu -->
          <div class="hidden lg:flex items-center space-x-8">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.path"
              class="nav-link relative text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-orange-50"
              active-class="text-orange-600"
            >
              {{ item.name }}
            </router-link>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-4">
            <!-- WhatsApp CTA -->
            <a
              href="https://api.whatsapp.com/send?phone=2347019727419"
              target="_blank"
              rel="noopener noreferrer"
              class="hidden md:inline-flex items-center gap-2 bg-orange-500 text-white font-semibold rounded-xl py-3 px-6 shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Contact via WhatsApp"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
              </svg>
              Let's Talk
            </a>

            <!-- Mobile Menu Button -->
            <button
              @click="toggleMobileMenu"
              class="lg:hidden p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Toggle mobile menu"
              :aria-expanded="isMobileMenuOpen"
            >
              <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div v-if="isMobileMenuOpen" class="lg:hidden mt-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
            <div class="space-y-2">
              <router-link
                v-for="item in navigationItems"
                :key="item.name"
                :to="item.path"
                @click="closeMobileMenu"
                class="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors duration-300"
              >
                {{ item.name }}
              </router-link>
              <div class="pt-4 border-t border-gray-200">
                <a
                  href="https://api.whatsapp.com/send?phone=2347019727419"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  @click="closeMobileMenu"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
                  </svg>
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </transition>
      </nav>
    </header>

    <!-- Main Content Area -->
    <main class="relative z-10 pt-20 md:pt-24">
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform translate-y-4 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-4 opacity-0"
        >
        </transition>
        <component :is="Component" />

      </router-view>
    </main>

    <!-- Scroll to Top Button -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-0 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-0 opacity-0"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive state
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const showScrollTop = ref(false);

// Navigation items
const navigationItems = ref([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]);

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Scroll functions
const handleScroll = () => {
  const scrollY = window.scrollY;
  isScrolled.value = scrollY > 50;
  showScrollTop.value = scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Keyboard navigation
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', handleKeyDown);
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuButton = document.querySelector('.mobile-menu-button');
    
    if (isMobileMenuOpen.value && 
        mobileMenu && 
        !mobileMenu.contains(event.target) && 
        !menuButton.contains(event.target)) {
      closeMobileMenu();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Grid background pattern */
.bg-grid-slate-100 {
  background-image: 
    linear-gradient(to right, #f1f5f9 1px, transparent 1px),
    linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
  background-size: 2rem 2rem;
}

/* Floating blob animations */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Navigation enhancements */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  background: linear-gradient(to right, #ea580c, #f59e0b);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

/* Header backdrop blur effect */
header {
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Mobile menu enhancements */
.mobile-menu {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #ea580c;
  outline-offset: 2px;
}

/* Responsive improvements */
@media (max-width: 640px) {
  .animate-blob {
    width: 200px;
    height: 200px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .bg-gradient-to-br {
    background: #fff;
  }
  
  .nav-link::after {
    background: #000;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-blob,
  .transition-all,
  .transition-colors,
  .transition-transform {
    animation: none;
    transition: none;
  }
  
  html {
    scroll-behavior: auto;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #ea580c, #f59e0b);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #dc2626, #ea580c);
}
</style>
