<template>
  <div class="projects-page">
    <section class="py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div class="container mx-auto px-4 relative">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Portfolio Showcase
          </div>
          <h1 class="text-4xl md:text-5xl font-bold bg-orange-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing my development skills and creativity
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex justify-center mb-12">
          <div class="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
            <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              :class="[
                'px-6 py-3 rounded-xl font-medium transition-all duration-300',
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="project-card group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden">
              <div 
                class="w-full h-full transition-all duration-300 group-hover:scale-110"
              >
                <!-- Actual project image -->
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                  loading="lazy"
                />
                <!-- Fallback icon overlay when image fails to load -->
                <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 opacity-0 image-fallback">
                  <div class="text-6xl text-orange-400" v-html="project.icon"></div>
                </div>
                <div class="absolute top-4 right-4 z-10">
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                    :class="project.status === 'Completed' ? 'bg-green-100/90 text-green-700' : 'bg-blue-100/90 text-blue-700'"
                  >
                    {{ project.status }}
                  </span>
                </div>
              </div>
              
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="flex gap-3">
                  <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                    aria-label="View live project"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <button
                    type="button"
                    @click.stop="openProjectModal(project)"
                    class="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                    aria-label="View project details"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                    </svg>
                  </button>
                </div>
              </div>

            <!-- Project Content -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {{ project.title }}
                </h3>
                <div class="text-sm text-gray-500">
                  {{ project.year }}
                </div>
              </div>
                
                <p class="text-gray-600 mb-4 leading-relaxed">
                  {{ project.description }}
                </p>
                
                <button
                  type="button"
                  @click="openProjectModal(project)"
                  class="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 mb-4"
                >
                  <span>View problem & impact</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6m0 0v6m0-6L10 16" />
                  </svg>
                </button>

                <!-- Technologies -->
                <div class="flex gap-2 flex-wrap mb-4">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Project Stats -->
                <div class="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div class="flex items-center gap-4">
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      {{ project.complexity }}
                    </span>
                    <span>{{ project.duration }}</span>
                  </div>
                  <span class="text-orange-600 font-medium">{{ project.category }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Details Modal -->
        <div
          v-if="isModalOpen && selectedProject"
          class="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/50 backdrop-blur-sm"
          @click.self="closeProjectModal"
        >
          <div class="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h2 class="text-xl font-semibold text-gray-900">{{ selectedProject.title }}</h2>
                <p class="text-sm text-gray-500 mt-1">{{ selectedProject.category }} · {{ selectedProject.year }}</p>
              </div>
              <button
                type="button"
                @click="closeProjectModal"
                class="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                aria-label="Close project details"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="px-6 py-5 max-h-[70vh] overflow-y-auto">
              <p class="text-gray-700 mb-6 leading-relaxed">
                {{ selectedProject.description }}
              </p>

              <div class="grid gap-4 md:grid-cols-3">
                <div class="md:col-span-1">
                  <h3 class="text-sm font-semibold text-gray-900 mb-1">Problem</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    {{ selectedProject.problem }}
                  </p>
                </div>
                <div class="md:col-span-1">
                  <h3 class="text-sm font-semibold text-gray-900 mb-1">Who</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    {{ selectedProject.who }}
                  </p>
                </div>
                <div class="md:col-span-1">
                  <h3 class="text-sm font-semibold text-gray-900 mb-1">Impact</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    {{ selectedProject.impact }}
                  </p>
                </div>
              </div>
            </div>

            <div class="px-6 py-4 bg-gray-50 flex items-center justify-between border-t border-gray-100">
              <div class="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-gray-200">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a7 7 0 100 14A7 7 0 009 2zM8 4h2v5H8V4zm1 7a1 1 0 110 2 1 1 0 010-2z" />
                  </svg>
                  <span>{{ selectedProject.complexity }}</span>
                </span>
                <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-gray-200">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ selectedProject.duration }}</span>
                </span>
              </div>

              <div class="flex items-center gap-3">
                <a
                  v-if="selectedProject.liveUrl"
                  :href="selectedProject.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  <span>View live</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6m0 0v6m0-6L10 16" />
                  </svg>
                </a>
                <a
                  v-if="selectedProject.githubUrl"
                  :href="selectedProject.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <span>View code</span>
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <div class="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
          <p class="text-gray-600">No projects match the selected category.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Reactive state
const activeCategory = ref('All')
const isModalOpen = ref(false)
const selectedProject = ref(null)

// Categories for filtering
const categories = ref(['All', 'Web Apps', 'E-commerce', 'Landing Pages'])

// Projects data - Real projects from portfolio
const projects = ref([
  {
    id: 1,
    title: 'Selify (Jiji.ng Alternative)',
    description: 'Selify is a modern classifieds marketplace where users can quickly list items like phones, cars, electronics, services, and more. Buyers can browse or post what they’re looking for, and sellers can respond directly. The platform offers smart pricing suggestions, verified listings, and a clean interface to make transactions faster and safer.',
    problem: 'Informal, fragmented marketplaces make it hard for everyday buyers and sellers to discover trustworthy listings and complete secure transactions.',
    who: 'Individual sellers and small merchants in Nigeria looking to buy and sell products safely online.',
    impact: 'Selify is a modern, user-centric marketplace platform designed to empower buyers and sellers across Nigeria and beyond. Our mission is to make buying and selling simple, safe, and rewarding for everyone, whether you\'re looking for electronics, vehicles, real estate, services, or more.',
    category: 'E-commerce',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    status: 'Completed',
    year: '2023',
    complexity: 'Advanced',
    duration: '3 months',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
    image: 'https://res.cloudinary.com/dmgoqash4/image/upload/v1758914092/ksyc9krup0fe6kpm68s1.png',
    liveUrl: 'https://selify.ng',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 13,
    title: 'VisionGardens Hotels',
    description: 'VisionGardens Hotels is a luxury booking platform that turns outdated hotel websites into a real-time, high-converting reservation experience.',
    problem: 'Premium hotels often struggle to present their value online and handle bookings smoothly due to clunky websites and lack of real-time availability.',
    who: 'Boutique and luxury hotel owners who want to attract high-value guests through a modern digital experience.',
    impact: 'By combining elegant room showcases, real-time availability, and seamless reservations, VisionGardens Hotels increases direct bookings and strengthens brand perception.',
    category: 'Web Apps',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    status: 'Completed',
    year: '2025',
    complexity: 'Advanced',
    duration: '2 months',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>`,
    image: 'https://res.cloudinary.com/dmgoqash4/image/upload/e_improve/v1762357638/00d6e606-9e67-4f19-9955-dae429c419c0.png',
    liveUrl: 'https://visiongardenshotel.com/',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 14,
    title: 'Roomio',
    description: 'Transform Your Hotel Operations with Roomio Effortless bookings, automated housekeeping, profit-driven revenue tools, connected operations, and actionable analytics all in one platform trusted by hotels to cut operational costs by 40 %.',
    problem: 'Hotels often struggle with fragmented systems one tool for bookings, another for housekeeping, another for payments, and spreadsheets for analytics. This leads to errors, delays, staff stress, lost revenue opportunities, and an inconsistent guest experience. Roomio eliminates the chaos by replacing multiple disconnected tools with one intelligent, fully automated platform.',
    who: 'Roomio is built for hotels, boutique stays, resorts, and serviced apartments looking to streamline operations, improve efficiency, reduce manual work, and scale without hiring more staff or increasing complexity.',
    impact: 'Roomio centralizes availability, payments, and reservation management so operators reduce admin overhead and deliver a smoother guest journey.',
    category: 'SaaS',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    status: 'Completed',
    year: '2025',
    complexity: 'Advanced',
    duration: '2 months',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>`,
    image: 'https://res.cloudinary.com/dkmbfgtzh/image/upload/v1763252205/185shots_so_1_c9htgc.png',
    liveUrl: 'https://roommio.netlify.app/',
    githubUrl: 'https://github.com/Gandokijnr/'
  },
  {
    id: 15,
    title: 'Winebay',
    description: 'Winebay is a modern e-commerce experience for discovering and purchasing curated wines, combining rich product storytelling with a smooth checkout flow.',
    problem: 'Wine lovers and boutique wine brands struggle with fragmented online shopping experiences that lack discovery tools, education, and trust-building content.',
    who: 'Wine enthusiasts, collectors, and boutique wine brands looking for a better way to discover, showcase, and purchase curated bottles online.',
    impact: 'Winebay makes it easier to discover the right bottle, compare options, and purchase with confidence through a polished, conversion-focused shopping experience.',
    category: 'E-commerce',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    status: 'Completed',
    year: '2025',
    complexity: 'Advanced',
    duration: '2 months',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10v2c0 3.31-2.69 6-6 6S7 7.31 7 4V2zm3 10h4v6.5c0 1.93-1.57 3.5-3.5 3.5S7 20.43 7 18.5V12h3z"/></svg>`,
    image: 'https://res.cloudinary.com/dkmbfgtzh/image/upload/v1764949307/199shots_so_nu4w7j.png',
    liveUrl: 'https://winebay.netlify.app/',
    githubUrl: 'https://github.com/Gandokijnr/'
  },
  {
    id: 2,
    title: 'My UniCamp',
    description: 'My UniCamp is a course discovery platform that turns scattered university information into a clear, searchable catalog of programs worldwide.',
    problem: 'Prospective students are overwhelmed by scattered university information and struggle to compare programs across schools.',
    who: 'High school graduates, career switchers, and lifelong learners researching degree or certificate programs.',
    impact: 'My UniCamp simplifies program discovery, helping users quickly find relevant courses and make more confident education decisions.',
    category: 'Web Apps',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    status: 'Completed',
    year: '2025',
    complexity: 'Advanced',
    duration: '3 Days',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>`,
    image: 'https://res.cloudinary.com/dmgoqash4/image/upload/v1759069146/d479d8d5-38ec-4282-9804-04a30c2456c3.png',
    liveUrl: 'https://myunicamp.netlify.app/',
    githubUrl: 'https://github.com/Gandokijnr/UniversityMiniPortal/tree/main'
  },
  {
    id: 12,
    title: 'Farmxic',
    description: 'Farmxic is an agricultural platform that turns isolated farming efforts into a connected ecosystem of modern tools, knowledge, and market opportunities.',
    problem: 'Small and mid-scale farmers often lack access to modern techniques, reliable markets, and relevant agricultural information.',
    who: 'Farmers and agricultural cooperatives seeking better tools, knowledge, and market connections.',
    impact: 'Farmxic connects farmers to resources and market access, helping them improve yields, income, and resilience.',
    category: 'Web Apps',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    status: 'Completed',
    year: '2024',
    complexity: 'Advanced',
    duration: '3 months',
    gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    image: 'https://res.cloudinary.com/dkmbfgtzh/image/upload/v1763718043/1815defc-a3b4-4eed-ae5c-19653cada0db.png',
    liveUrl: 'https://farmxic.com',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 3,
    title: 'SurePicks',
    description: 'SurePicks is a sports prediction platform that replaces gut-feel betting with data-driven insights and real-time odds.',
    problem: 'Sports bettors often rely on guesswork or low-quality tips, resulting in uninformed bets and inconsistent outcomes.',
    who: 'Recreational and semi-professional sports bettors seeking a data-backed edge.',
    impact: 'SurePicks uses analytics, odds, and expert insights to help users make more informed betting decisions and manage risk more intelligently.',
    category: 'Web Apps',
    technologies: ['Vue.js/NuxtJs', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    status: 'Completed',
    year: '2025',
    complexity: 'Advanced',
    duration: '2 months',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    image: 'https://res.cloudinary.com/dmgoqash4/image/upload/v1760017052/qf8kzawqzfhpjdpuqket.png',
    liveUrl: 'https://surepicks.netlify.app',
    githubUrl: 'https://github.com/Gandokijnr/surepicks'
  },
  
  {
    id: 4,
    title: 'Real Estate Web Page',
    description: 'The Real Estate Web Page is a modern listings interface that turns static property catalogs into a responsive, searchable home-hunting experience.',
    problem: 'Homebuyers and investors struggle to find relevant properties when real estate listings are poorly presented or hard to search.',
    who: 'Real estate agencies and property developers needing a modern online presence for their listings.',
    impact: 'This real estate web page makes properties easier to browse and filter, driving more qualified leads and higher engagement.',
    category: 'Landing Pages',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    status: 'Completed',
    year: '2024',
    complexity: 'Intermediate',
    duration: '2 months',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    image: 'https://res.cloudinary.com/dmgoqash4/image/upload/v1746542466/bewlmvzgg8bjkdbrz9xe.png',
    liveUrl: 'https://gidiestate.netlify.app',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 5,
    title: 'Agency Aggregator App',
    description: 'Agency Aggregator is a management platform that replaces scattered agency spreadsheets with a secure, all-in-one dashboard for teams, clients, and data.',
    problem: 'Agencies often manage clients, projects, and teams across spreadsheets and disconnected tools, creating data silos and operational blind spots.',
    who: 'Agency owners and operations managers at digital, creative, or marketing agencies.',
    impact: 'Agency Aggregator centralizes data with role-based access and dashboards, improving control, visibility, and day-to-day efficiency.',
    category: 'Web Apps',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    status: 'Completed',
    year: '2025',
    complexity: 'Advanced',
    duration: '3 months',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
    image: 'https://res.cloudinary.com/dmgoqash4/image/upload/v1758914726/499a0f3a-e4c9-4900-8bcc-f83c4ca44c01.png',
    liveUrl: 'https://agencyaggregator.netlify.app/',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 6,
    title: 'Fx Trading Learning Web App',
    description: 'The Fx Trading Learning Web App is an educational platform that turns scattered forex knowledge into structured, actionable learning.',
    problem: 'Aspiring forex traders face steep learning curves and fragmented educational resources, leading to costly mistakes in live markets.',
    who: 'Beginner and intermediate forex traders who want structured, practical learning.',
    impact: 'The app provides guided modules, analysis tools, and trading guides that reduce confusion and help users make more informed trading decisions.',
    category: 'Web Apps',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    status: 'Completed',
    year: '2024',
    complexity: 'Advanced',
    duration: '3 months',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`,
    image: 'https://res.cloudinary.com/dmgoqash4/image/upload/v1746542677/hoepuzrb31m0jagrhm5h.png',
    liveUrl: 'https://gandokigroup.netlify.app',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 7,
    title: 'Travel Agency Website',
    description: 'The Travel Agency Website is a full-featured platform that replaces manual travel bookings with an online, end-to-end trip planning experience.',
    problem: 'Many travel agencies rely on offline processes or outdated sites, making it hard for customers to discover packages and book trips smoothly.',
    who: 'Travel agencies serving leisure and corporate travelers who want online booking capabilities.',
    impact: 'The Travel Agency Website streamlines trip discovery, booking, and customer management, leading to more conversions and better client service.',
    category: 'Landing Pages',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
    status: 'Completed',
    year: '2023',
    complexity: 'Advanced',
    duration: '4 months',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/></svg>`,
    image: '/src/assets/hplink.png',
    liveUrl: 'https://www.hplinktravels.com',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 8,
    title: 'Job Navigator',
    description: 'Job Navigator is a job search platform that transforms scattered applications into a single, trackable job-hunting workspace.',
    problem: 'Job seekers waste time jumping between platforms and struggle to track applications or find roles that truly match their profiles.',
    who: 'Early- and mid-career professionals actively searching for new opportunities.',
    impact: 'Job Navigator consolidates listings, filters, and application tracking so users can run a more focused, organized job search.',
    category: 'Web Apps',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    status: 'Completed',
    year: '2023',
    complexity: 'Intermediate',
    duration: '2 months',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/></svg>`,
    image: '/src/assets/jobnavigator.png',
    liveUrl: 'https://jobnavigator.netlify.app/',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 9,
    title: 'Trade Ventures E-commerce',
    description: 'Trade Ventures E-commerce is a full-featured online store that replaces basic catalogs with carts, payments, inventory control, and admin dashboards.',
    problem: 'Product-based businesses struggle to sell online when they lack a robust storefront with inventory, payments, and admin tooling.',
    who: 'Small and medium retailers looking to launch or upgrade their online sales channel.',
    impact: 'Trade Ventures E-commerce provides a complete buying experience and back-office tools, increasing sales while simplifying operations.',
    category: 'E-commerce',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Payment APIs'],
    status: 'Completed',
    year: '2023',
    complexity: 'Advanced',
    duration: '4 months',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/></svg>`,
    image: '/src/assets/marketplace.png',
    liveUrl: 'https://tradeventures.netlify.app/',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 10,
    title: 'Calculator Web App',
    description: 'The Calculator Web App is a modern browser-based calculator that turns one-off calculations into a fast, traceable workflow.',
    problem: 'Users needing quick calculations often rely on basic tools that lack advanced functions or history, making it easy to repeat work or make errors.',
    who: 'Students, analysts, and professionals doing frequent ad-hoc calculations in the browser.',
    impact: 'The calculator’s advanced functions and history tracking speed up calculations and reduce mistakes.',
    category: 'Web Apps',
    technologies: ['JavaScript', 'HTML5', 'Tailwind CSS', 'Local Storage'],
    status: 'Completed',
    year: '2023',
    complexity: 'Beginner',
    duration: '2 weeks',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
    image: '/src/assets/caluculatingapp.png',
    liveUrl: 'https://caluculatingapp.netlify.app/',
    githubUrl: 'https://github.com/Gandokijnr'
  },
  {
    id: 11,
    title: 'Pocket Notify App',
    description: 'Pocket Notify is a notification manager that replaces scattered reminders with a single, customizable alert hub.',
    problem: 'Busy people frequently miss tasks and events because reminders are scattered across apps and devices.',
    who: 'Busy professionals and students juggling multiple commitments and deadlines.',
    impact: 'Pocket Notify centralizes alerts and scheduling so users stay on top of priorities and reduce missed obligations.',
    category: 'Web Apps',
    technologies: ['JavaScript', 'HTML5', 'Tailwind CSS', 'Web APIs'],
    status: 'Completed',
    year: '2023',
    complexity: 'Intermediate',
    duration: '1 month',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>`,
    image: '/src/assets/pocketnotify.png',
    liveUrl: 'https://pocketnotify.netlify.app/',
    githubUrl: 'https://github.com/Gandokijnr'
  },
])

// Modal handlers
const openProjectModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  document.body.style.overflow = ''
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isModalOpen.value) {
    closeProjectModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Computed property for filtered projects
const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeCategory.value)
})

// Handle image loading errors
const handleImageError = (event) => {
  const img = event.target
  const fallback = img.parentElement.querySelector('.image-fallback')
  
  // Hide the broken image and show fallback
  img.style.display = 'none'
  if (fallback) {
    fallback.style.opacity = '1'
  }
}
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding-top: 2rem;
}

.bg-grid-slate-100 {
  background-image: 
    linear-gradient(to right, #f1f5f9 1px, transparent 1px),
    linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
  background-size: 2rem 2rem;
}
</style>
