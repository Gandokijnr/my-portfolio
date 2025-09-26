<template>
  <section
    id="about"
    class="about-section py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden"
    aria-labelledby="about-heading"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,rgba(255,255,255,0.15))] opacity-30"></div>
    <div class="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
    
    <!-- Section Header -->
    <div class="container mx-auto px-6 mb-20">
      <div class="text-center max-w-4xl mx-auto">
        <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          About Me
        </div>
        <h2 id="about-heading" class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Crafting Digital
          <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"> Experiences</span>
        </h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Passionate about creating intuitive, accessible, and beautiful digital solutions that make a real impact on businesses and users alike.
        </p>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
        
        <!-- Left Column - Enhanced Image Section -->
        <div class="relative order-2 lg:order-1">
          <div class="relative group">
            <!-- Decorative elements -->
            <div class="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <!-- Main image container -->
            <div class="relative bg-white rounded-2xl p-2 shadow-2xl">
              <img
                class="w-full h-auto rounded-xl object-cover"
                src="https://res.cloudinary.com/dqqycsgmn/image/upload/v1757149514/38fca990-a427-49d1-a47b-e206752ac09a.png"
                alt="Abah Gideon - Frontend Developer and Digital Marketer workspace"
                loading="lazy"
              />
            </div>

            <!-- Floating achievement cards -->
            <div class="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-bounce-slow hidden md:block">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-sm text-gray-900">8+ Projects</p>
                  <p class="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-bounce-slow animation-delay-1000 hidden md:block">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-sm text-gray-900">Expert Level</p>
                  <p class="text-xs text-gray-500">Frontend Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Content Section -->
        <div class="order-1 lg:order-2">
          <!-- Main Story Card -->
          <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">My Story</h3>
                <p class="text-orange-600 font-medium">Frontend Developer & Digital Marketer</p>
              </div>
            </div>
            
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              I'm skilled, experienced and passionate about Frontend Development and Digital Marketing. With expertise in Vue.js, React, and modern web technologies, I combine aesthetic design with strategic digital marketing to transform complex business ideas into visually appealing and functionally efficient web solutions that drive real results.
            </p>

            <!-- Key Stats -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="text-center p-4 bg-gray-50 rounded-xl">
                <div class="text-3xl font-bold text-orange-600 mb-1">5+</div>
                <div class="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-xl">
                <div class="text-3xl font-bold text-orange-600 mb-1">50+</div>
                <div class="text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>

            <!-- Core Skills -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Core Expertise</h4>
              <div class="grid gap-3">
                <div class="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-semibold text-gray-900">Frontend Development</h5>
                      <p class="text-sm text-gray-600">Vue.js, React, JavaScript, Tailwind CSS</p>
                    </div>
                  </div>
                  <div class="text-orange-600 font-bold">95%</div>
                </div>

                <div class="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-semibold text-gray-900">Digital Marketing</h5>
                      <p class="text-sm text-gray-600">SEO, Social Media, Content Strategy</p>
                    </div>
                  </div>
                  <div class="text-blue-600 font-bold">90%</div>
                </div>

                <div class="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-semibold text-gray-900">UI/UX Design</h5>
                      <p class="text-sm text-gray-600">User Research, Prototyping, Design Systems</p>
                    </div>
                  </div>
                  <div class="text-green-600 font-bold">85%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>
