<template>
  <div class="user-acquisition-page min-h-screen">
    <!-- Page Title Section (Header Hero) -->
    <section class="hero-section relative overflow-hidden py-20 md:py-32">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
            <span class="block mb-2">User Acquisition Specialist</span>
            <span class="gradient-text">Performance That Drives Results</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meta Ads Expert with proven success in growing businesses through data, creativity, and strategy.
          </p>
          
          <!-- Optional animated metrics -->
          <div class="flex justify-center items-center gap-8 mt-12 opacity-60">
            <div class="metric-item" v-for="metric in heroMetrics" :key="metric.label">
              <div class="text-2xl md:text-3xl font-bold text-orange-600">{{ metric.value }}</div>
              <div class="text-sm text-gray-500">{{ metric.label }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background decoration -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </section>

    <!-- Achievement Highlight (Intro Card) -->
    <section class="achievement-section py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="achievement-card bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-orange-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                  Turning ₦1.4M into ₦35M+ in Sales
                </h2>
              </div>
              
              <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                I helped a real estate company specializing in land sales across Lagos, Ogun, and Ibadan generate over 
                <span class="font-bold text-orange-600">₦35 million in revenue</span> from just 
                <span class="font-bold text-orange-600">₦1.4 million in Meta ad spend</span>.
              </p>
              
              <p class="text-lg text-gray-600 leading-relaxed">
                Through audience segmentation, creative optimization, and retargeting strategies, I was able to reach quality leads 
                and close high-value deals proving that powerful results don't always need massive budgets.
              </p>
              
              <div class="flex items-center gap-6 mt-8 text-sm text-gray-500">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">📊</span>
                  <span>Data-Driven</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-2xl">💰</span>
                  <span>ROI Focused</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-2xl">📈</span>
                  <span>Scalable Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Strengths (Visual Grid Section) -->
    <section class="strengths-section py-16 md:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Core Strengths</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            My main strength lies in Meta Ads, where data meets creativity to drive consistent user growth.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <!-- Meta Ads - Main Focus -->
          <div class="strength-card meta-ads-card col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div class="text-4xl mb-4">🟦</div>
            <h3 class="text-2xl font-bold mb-4">Meta Ads</h3>
            <p class="text-blue-100 leading-relaxed">
              Expert in campaign setup, audience research, creative testing, and performance scaling. 
              My specialty in driving high-converting campaigns across Facebook and Instagram.
            </p>
            <div class="mt-6 text-sm text-blue-200">
              <span class="bg-blue-400 bg-opacity-30 px-3 py-1 rounded-full mr-2">Main Focus</span>
              <span class="bg-blue-400 bg-opacity-30 px-3 py-1 rounded-full">Expert Level</span>
            </div>
          </div>
          
          <!-- Google Ads -->
          <div class="strength-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200">
            <div class="text-3xl mb-4">🟨</div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Google Ads</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Search and display campaigns with conversion tracking and optimization.
            </p>
          </div>
          
          <!-- Analytics & Tools -->
          <div class="strength-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200">
            <div class="text-3xl mb-4">🟪</div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Analytics & Tools</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Google Analytics, Meta Pixel.
            </p>
          </div>
        </div>
        
        <!-- Creative Tools Row -->
        <div class="max-w-2xl mx-auto mt-6">
          <div class="strength-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
            <div class="text-center">
              <div class="text-3xl mb-4">🧩</div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Creative Tools</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Canva, Figma, and AI-assisted ad copywriting for compelling creative assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Section -->
    <section class="case-studies-section py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Case Study</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world proof of performance-driven results in the real estate industry.
          </p>
        </div>
        
        <div class="space-y-12 max-w-6xl mx-auto">
          <!-- Real Estate Case Study -->
          <div class="case-study-card bg-white rounded-3xl shadow-xl overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/3 bg-gradient-to-br from-orange-400 to-red-500 p-8 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-6xl mb-4">🏡</div>
                  <h3 class="text-2xl font-bold">Real Estate</h3>
                  <p class="text-orange-100">Land Sales Campaign</p>
                </div>
              </div>
              <div class="md:w-2/3 p-8">
                <div class="space-y-6">
                  <div>
                    <h4 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                      Goal
                    </h4>
                    <p class="text-gray-600">Generate qualified land buyers with a tight budget across Lagos, Ogun, and Ibadan.</p>
                  </div>
                  
                  <div>
                    <h4 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    </h4>
                    <p class="text-gray-600">Used video ads to showcase location benefits, created lookalike audiences from previous leads, and optimized creatives for CTR.</p>
                  </div>
                  
                  <div>
                    <h4 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    </h4>
                    <p class="text-gray-600">
                      <span class="font-bold text-orange-600">₦1.4M ad spend → ₦35M+ in verified sales</span> 
                      <span class="text-sm text-gray-500">(6 Months)</span>
                    </p>
                  </div>
                </div>
                
                <button 
                  @click="openModal('realEstate')"
                  class="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Full Breakdown
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Overlay -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 modal-backdrop z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content shadow-2xl transform transition-all duration-300"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h3 class="text-2xl font-bold text-gray-800">{{ currentModalTitle }}</h3>
          <button 
            @click="closeModal"
            class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <!-- Real Estate Breakdown -->
          <div v-if="currentModalType === 'realEstate'" class="space-y-8">
            <!-- Campaign Objective -->
            <div class="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
              <h4 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span class="text-2xl">🧠</span> Campaign Objective
              </h4>
              <p class="text-gray-700 leading-relaxed">
                Generate high-quality land purchase leads for properties in Lagos, Ogun, and Ibadan on a limited ad budget.
              </p>
            </div>

            <!-- Duration & Budget -->
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 rounded-xl p-6">
                <h4 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span class="text-xl">📅</span> Duration
                </h4>
                <p class="text-2xl font-bold text-blue-600">6 weeks</p>
              </div>
              <div class="bg-green-50 rounded-xl p-6">
                <h4 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span class="text-xl">💰</span> Budget Allocation
                </h4>
                <p class="text-2xl font-bold text-green-600">₦1.4 million</p>
                <p class="text-sm text-gray-600">Meta Ads only</p>
              </div>
            </div>

            <!-- Strategy Overview -->
            <div class="bg-gray-50 rounded-xl p-6">
              <h4 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span class="text-2xl">💡</span> Strategy Overview
              </h4>
              <div class="space-y-4">
                <p class="text-gray-700 leading-relaxed mb-4">
                  Used Meta Ads Manager to set up a multi-layer campaign:
                </p>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h5 class="font-semibold text-orange-600 mb-2">Traffic Campaign</h5>
                    <p class="text-sm text-gray-600">Drive awareness and clicks to landing pages</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h5 class="font-semibold text-blue-600 mb-2">Lead Campaign</h5>
                    <p class="text-sm text-gray-600">Collect verified leads via instant forms</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h5 class="font-semibold text-green-600 mb-2">Retargeting Campaign</h5>
                    <p class="text-sm text-gray-600">Re-engage viewers who didn't convert</p>
                  </div>
                </div>
                <ul class="space-y-2 mt-4">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-500 mt-1">•</span>
                    <span class="text-gray-700">Built custom audiences based on past inquiries and website visitors</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-500 mt-1">•</span>
                    <span class="text-gray-700">Optimized ad creatives with before/after land visuals and emotional headlines like "Own Your Land Before the Price Triples!"</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Tools Used -->
            <div class="bg-purple-50 rounded-xl p-6">
              <h4 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span class="text-2xl">⚙️</span> Tools Used
              </h4>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center">
                  <div class="bg-blue-500 text-white rounded-lg p-3 mb-2">
                    <span class="font-semibold">Meta</span>
                  </div>
                  <p class="text-sm text-gray-600">Ads Manager</p>
                </div>
                <div class="text-center">
                  <div class="bg-blue-600 text-white rounded-lg p-3 mb-2">
                    <span class="font-semibold">Pixel</span>
                  </div>
                  <p class="text-sm text-gray-600">Event Tracking</p>
                </div>
                <div class="text-center">
                  <div class="bg-purple-500 text-white rounded-lg p-3 mb-2">
                    <span class="font-semibold">Privyr</span>
                  </div>
                  <p class="text-sm text-gray-600">Lead Management</p>
                </div>
                <div class="text-center">
                  <div class="bg-green-600 text-white rounded-lg p-3 mb-2">
                    <span class="font-semibold">WhatsApp</span>
                  </div>
                  <p class="text-sm text-gray-600">Sales Follow-ups</p>
                </div>
              </div>
            </div>

            <!-- Results Table -->
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
              <h4 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span class="text-2xl">📊</span> Results
              </h4>
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-orange-200">
                      <th class="text-left py-3 px-4 font-semibold text-gray-800">Metric</th>
                      <th class="text-right py-3 px-4 font-semibold text-gray-800">Result</th>
                    </tr>
                  </thead>
                  <tbody class="space-y-2">
                    <tr class="border-b border-orange-100">
                      <td class="py-3 px-4 text-gray-700">Total Ad Spend</td>
                      <td class="py-3 px-4 text-right font-semibold text-orange-600">₦1,400,000</td>
                    </tr>
                    <tr class="border-b border-orange-100">
                      <td class="py-3 px-4 text-gray-700">Leads Generated</td>
                      <td class="py-3 px-4 text-right font-semibold text-blue-600">482 qualified leads</td>
                    </tr>
                    <tr class="border-b border-orange-100">
                      <td class="py-3 px-4 text-gray-700">Cost per Lead</td>
                      <td class="py-3 px-4 text-right font-semibold text-purple-600">₦2,902</td>
                    </tr>
                    <tr class="border-b border-orange-100">
                      <td class="py-3 px-4 text-gray-700">Sales Closed</td>
                      <td class="py-3 px-4 text-right font-semibold text-green-600">22 land plots</td>
                    </tr>
                    <tr class="border-b border-orange-100">
                      <td class="py-3 px-4 text-gray-700">Total Revenue</td>
                      <td class="py-3 px-4 text-right font-bold text-2xl text-green-600">₦35,000,000+</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-4 text-gray-700 font-semibold">ROAS</td>
                      <td class="py-3 px-4 text-right font-bold text-3xl text-orange-600">17.8x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Insights & Learnings -->
            <div class="bg-gray-800 text-white rounded-xl p-6">
              <h4 class="text-xl font-bold mb-4 flex items-center gap-2">
                <span class="text-2xl">🔍</span> Insights & Learnings
              </h4>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-orange-400 text-xl mt-1">•</span>
                  <p class="text-gray-300">Videos performed <span class="text-orange-400 font-semibold">40% better</span> than static posts</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-orange-400 text-xl mt-1">•</span>
                  <p class="text-gray-300">Retargeting contributed <span class="text-orange-400 font-semibold">65% of total conversions</span></p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-orange-400 text-xl mt-1">•</span>
                  <p class="text-gray-300">The campaign proved that strategic storytelling and narrow audience targeting can drive massive results even with small budgets</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Metrics Snapshot -->
    <section class="metrics-section py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Impact at a Glance</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that showcase the power of strategic user acquisition.
          </p>
        </div>
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="metric-card text-center" v-for="metric in mainMetrics" :key="metric.label">
            <div class="text-4xl md:text-5xl font-bold text-orange-400 mb-2" :ref="el => metricRefs[metric.label] = el">
              {{ metric.displayValue }}
            </div>
            <div class="text-lg text-gray-300">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reflection / Closing Paragraph -->
    <section class="reflection-section py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Growth Through Strategy</h2>
            
            <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              These experiences have strengthened my ability to combine creative storytelling with data-driven marketing. 
              If I could pull multi-million sales in the real estate sector, then working with brands like Pricepally 
              in the grocery e-commerce space would only be a chance to push my creativity even further.
            </p>
            
            <p class="text-xl font-semibold text-orange-600 mb-8">
              My ultimate goal? Turning insights into impact — one campaign at a time.
            </p>
            
            <div class="flex justify-center items-center gap-8 text-sm text-gray-500">
              <div class="flex items-center gap-2">
                <span class="text-2xl">🎯</span>
                <span>Strategic Thinking</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-2xl">🚀</span>
                <span>Growth Mindset</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-2xl">💡</span>
                <span>Creative Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action -->
    <section class="cta-section py-16 md:py-24 bg-gradient-to-br from-orange-500 to-amber-500">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto">
          <div class="text-4xl mb-6">💬</div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's talk about scaling your next campaign.
          </h2>
          <p class="text-xl text-orange-100 mb-8 leading-relaxed">
            Ready to turn your marketing budget into measurable growth? Let's discuss how data-driven strategies 
            can transform your user acquisition efforts.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact" 
              class="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
            >
              Get in Touch
            </router-link>
            
            <a
              href="https://api.whatsapp.com/send?phone=2347019727419&text=Hi%20Gideon,%20I'd%20like%20to%20discuss%20user%20acquisition%20strategies"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

// Hero metrics data
const heroMetrics = ref([
  { value: '35M+', label: 'Revenue Generated' },
  { value: '300%', label: 'Average ROI' },
  { value: '100K+', label: 'Users Reached' }
])

// Main metrics data
const mainMetrics = ref([
  { value: 35000000, displayValue: '35M+', label: 'Revenue Generated' },
  { value: 300, displayValue: '300%', label: 'ROI Average' },
  { value: 5, displayValue: '5+', label: 'Industries Worked With' },
  { value: 100000, displayValue: '100K+', label: 'Users Reached' }
])

// Refs for metric animation
const metricRefs = ref({})

// Modal functionality
const isModalOpen = ref(false)
const currentModalType = ref('')

// Modal titles
const modalTitles = {
  realEstate: 'Real Estate Land Sales Campaign - Full Breakdown'
}

const currentModalTitle = computed(() => {
  return modalTitles[currentModalType.value] || ''
})

// Modal functions
const openModal = (type) => {
  currentModalType.value = type
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  currentModalType.value = ''
  document.body.style.overflow = 'auto'
}

// Animate counters when they come into view
const animateCounters = () => {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target
        const metric = mainMetrics.value.find(m => metricRefs.value[m.label] === element)
        
        if (metric && !element.classList.contains('animated')) {
          element.classList.add('animated')
          animateValue(element, 0, metric.value, 2000, metric.displayValue)
        }
      }
    })
  }, observerOptions)

  // Observe all metric elements
  Object.values(metricRefs.value).forEach(el => {
    if (el) observer.observe(el)
  })
}

// Animate individual counter
const animateValue = (element, start, end, duration, finalDisplay) => {
  const startTimestamp = performance.now()
  
  const step = (timestamp) => {
    const elapsed = timestamp - startTimestamp
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const current = Math.floor(start + (end - start) * easeOutQuart)
    
    if (finalDisplay.includes('M+')) {
      element.textContent = (current / 1000000).toFixed(0) + 'M+'
    } else if (finalDisplay.includes('K+')) {
      element.textContent = (current / 1000).toFixed(0) + 'K+'
    } else if (finalDisplay.includes('%')) {
      element.textContent = current + '%'
    } else {
      element.textContent = current + '+'
    }
    
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      element.textContent = finalDisplay
    }
  }
  
  requestAnimationFrame(step)
}

// Keyboard event handler
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  nextTick(() => {
    animateCounters()
  })
  
  // Add keyboard event listener
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  // Clean up event listener
  document.removeEventListener('keydown', handleKeyDown)
  // Ensure body overflow is reset
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #ea580c, #f59e0b, #eab308);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Achievement card hover effects */
.achievement-card {
  transition: all 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Strength cards */
.strength-card {
  transition: all 0.3s ease;
}

.strength-card:hover {
  transform: translateY(-5px);
}

.meta-ads-card {
  position: relative;
  overflow: hidden;
}

.meta-ads-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.meta-ads-card:hover::before {
  left: 100%;
}

/* Case study cards */
.case-study-card {
  transition: all 0.3s ease;
}

.case-study-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Metric cards animation */
.metric-card {
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: scale(1.05);
}

/* Animation delays for staggered effects */
.animation-delay-2000 {
  animation-delay: 2s;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0;
  }
  
  .case-study-card .md\:flex {
    flex-direction: column;
  }
  
  .strength-card.meta-ads-card {
    grid-column: span 1;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .strength-card,
  .achievement-card,
  .case-study-card,
  .metric-card {
    transition: none;
  }
  
  .strength-card:hover,
  .achievement-card:hover,
  .case-study-card:hover,
  .metric-card:hover {
    transform: none;
  }
}

/* Modal animations */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Modal backdrop blur */
.modal-backdrop {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Modal content scroll styling */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #ea580c;
  outline-offset: 2px;
}
</style>
