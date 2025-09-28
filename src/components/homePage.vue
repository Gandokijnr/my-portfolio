<template>
  <main id="top" class="animate-fade-in">
    <div class="hero-container">
      <div class="container mx-auto px-6 py-5 md:py-12">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <!-- Left Content Column -->
          <div class="flex flex-col gap-6 md:w-1/2 order-2 md:order-1">
            <!-- Improved typography hierarchy -->
            <div class="intro-section">
              
              <h1
                class="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800"
              >
                <span class="block mb-1">Hello, I'm</span>
                <span class="text-5xl md:text-6xl lg:text-7xl gradient-text"
                  >Abah Gideon</span
                >
              </h1>
              <div class="flex items-center my-4">
                <div class="h-1 w-16 bg-orange-500 mr-4"></div>
                <p class="font-semibold text-2xl md:text-3xl text-gray-700">
                  Frontend Developer & Digital Marketer
                </p>
              </div>
            </div>

            <p
              class="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
            >
              Expert Frontend Developer and Digital Marketer specializing in Vue.js, React, and modern web technologies. I create intuitive digital experiences that blend aesthetics with functionality, helping businesses grow through strategic web development and digital marketing solutions.
            </p>

            <!-- Enhanced CTA section -->
            <div class="flex flex-wrap gap-5 mt-6">
              <a
                href="https://drive.google.com/file/d/1TYPjceen3un2sLNaYJqjzBTICFfacLau/view?usp=sharing"
                target="_blank"
                class="primary-btn"
                aria-label="Download Resume"
              >
                <span class="flex items-center gap-2">
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
              </a>
              <a href="#projects" class="secondary-btn">
                <span class="flex items-center gap-2">
                  <span>View Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </div>

            <!-- Social links -->
            <div class="mt-6">
              <p class="text-sm text-gray-500 mb-3">Connect with me</p>
              <div class="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abah-gideon/"
                  class="social-link"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/Gandokijnr"
                  class="social-link"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="https://dribbble.com/Gandoki"
                  class="social-link"
                  target="_blank"
                  aria-label="Dribbble"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Image Column -->
          <div class="md:w-1/2 order-1 md:order-2 hover-lift">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-100 rounded-full blur-3xl opacity-30 -z-10 transform translate-y-8"
              ></div>
              <img
                class=" mx-auto rounded-2xl shadow-2xl border-4 border-white"
                src="https://res.cloudinary.com/dqqycsgmn/image/upload/v1757150936/ea52cef7-48ae-4f4e-9376-0d76275ea776.png"
                alt="Gandoki Jr - UI/UX Designer and Frontend Developer"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Improved scroll indicator -->
    <div class="scroll-indicator">
      <a
        href="#projects"
        class="flex flex-col items-center text-gray-500 hover:text-orange-500 transition-colors"
      >
        <span class="text-sm font-medium mb-2">Scroll to explore</span>
        <div class="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </a>
    </div>
  </main>

  <!-- Projects Section -->
  <section id="projects" class="py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
    
    <div class="container mx-auto px-4 relative">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
          Featured Projects
        </div>
        <h2 class="text-4xl md:text-5xl font-bold bg-orange-600 bg-clip-text text-transparent mb-6">
          My Latest Work
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A showcase of my recent projects demonstrating expertise in modern web development
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
              </div>
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

      <!-- View All Projects Button -->
      <div class="text-center mt-12">
        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-2xl hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          <span>View All Projects</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Reactive state
const activeCategory = ref('All')

// Categories for filtering
const categories = ref(['All', 'Web Apps', 'E-commerce', 'Landing Pages'])

// Projects data - Real projects from portfolio (showing featured projects on home page)
const projects = ref([
  {
    id: 1,
    title: 'Selify (Jiji.ng Alternative)',
    description: 'A marketplace platform similar to Jiji.ng with product listings, user profiles, and secure transaction features.',
    category: 'E-commerce',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Firebase'],
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
    id: 2,
    title: 'My UniCamp',
    description: 'Explore courses from top universities around the world. Find the perfect program to advance your career and expand your knowledge.',
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
    id: 3,
    title: 'Real Estate Web Page',
    description: 'A modern real estate platform featuring property listings, advanced search functionality, and responsive design for seamless user experience.',
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
    id: 4,
    title: 'Agency Aggregator App',
    description: 'A modern, professional agency management platform built with Vue.js and Supabase. This application provides role-based authentication, comprehensive dashboard functionality, and full CRUD operations for managing agency data.',
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
    id: 5,
    title: 'Fx Trading Learning Web App',
    description: 'An educational platform for forex trading with interactive learning modules, market analysis tools, and comprehensive trading guides.',
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
    id: 6,
    title: 'Trade Ventures E-commerce',
    description: 'A full-featured e-commerce platform with shopping cart, payment integration, inventory management, and admin dashboard.',
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
  }
])

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
/* Base styles with improved background */
main {
  background-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://res.cloudinary.com/dqqycsgmn/image/upload/e_improve/v1757149504/c1721a8b-8952-4474-b2f7-7a48db8c489e.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
}

/* Smoother fade-in animation */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

/* Enhanced hover animation for image */
.hover-lift {
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hover-lift:hover {
  transform: translateY(-10px);
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

/* Improved button styles */
.primary-btn {
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(255, 126, 95, 0.2),
    0 2px 4px -1px rgba(255, 126, 95, 0.1);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(255, 126, 95, 0.3),
    0 4px 6px -2px rgba(255, 126, 95, 0.2);
}

.secondary-btn {
  background: white;
  color: #ff7e5f;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  border: 2px solid #ff7e5f;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: rgba(255, 126, 95, 0.1);
  transform: translateY(-2px);
}

/* Social links */
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: #f5f5f5;
  color: #666;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #ff7e5f;
  color: white;
  transform: translateY(-3px);
}

/* Improved scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  text-align: center;
}

/* Projects section styles */
.bg-grid-slate-100 {
  background-image: 
    linear-gradient(to right, #f1f5f9 1px, transparent 1px),
    linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
  background-size: 2rem 2rem;
}

.project-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .hero-container {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }

  .gradient-text {
    font-size: 2.5rem;
  }
  
  /* Projects section mobile adjustments */
  #projects .grid {
    grid-template-columns: 1fr;
  }
  
  #projects .text-4xl {
    font-size: 2rem;
  }
  
  #projects .inline-flex {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  #projects .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
