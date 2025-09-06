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
                <div class="text-3xl font-bold text-orange-600 mb-1">3+</div>
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

      <!-- Featured Projects Section -->
      <div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-2 lg:p-12 text-white relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-black bg-opacity-10"></div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
        
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h3 class="text-3xl lg:text-4xl font-bold mb-2">Featured Projects</h3>
              <p class="text-orange-100 text-lg">Showcasing my latest work and achievements</p>
            </div>
            <div class="hidden md:flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="font-medium">8+ Projects</span>
            </div>
          </div>

          <!-- Modern Project Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-white">
              <a
                href="https://gidiestate.netlify.app"
                target="_blank"
                class="project-card"
              >
                <img
                  src="https://res.cloudinary.com/dmgoqash4/image/upload/v1746542466/bewlmvzgg8bjkdbrz9xe.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="HP Link Travels website"
                />
                <span class="project-label">Real Estate Web Page</span>
              </a>

              <a
                href="https://gandokigroup.netlify.app"
                target="_blank"
                class="project-card"
              >
                <img
                  src="https://res.cloudinary.com/dmgoqash4/image/upload/v1746542677/hoepuzrb31m0jagrhm5h.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="Fx Trading Learning Web App"
                />
                <span class="project-label">Fx Trading Learning Web App</span>
              </a>

              <a
                href="https://www.hplinktravels.com"
                target="_blank"
                class="project-card"
              >
                <img
                  src="../assets/hplink.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="HP Link Travels website"
                />
                <span class="project-label">Travel Agency</span>
              </a>

              <a
                href="https://jobnavigator.netlify.app/"
                target="_blank"
                class="project-card"
              >
                <img
                  src="../assets/jobnavigator.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="Job Navigator website"
                />
                <span class="project-label">Job Listings</span>
              </a>

              <a
                href="https://selify.netlify.app/"
                target="_blank"
                class="project-card"
              >
                <img
                  src="https://res.cloudinary.com/dmgoqash4/image/upload/v1746543234/a95isdh4ztgvvw7ogkgd.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="Job Navigator website"
                />
                <span class="project-label">Selify (Jiji.ng Alternative)</span>
              </a>

              <a
                href="https://tradeventures.netlify.app/"
                target="_blank"
                class="project-card"
              >
                <img
                  src="../assets/marketplace.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="Trade Ventures e-commerce"
                />
                <span class="project-label">E-commerce</span>
              </a>

              <a
                href="https://caluculatingapp.netlify.app/"
                target="_blank"
                class="project-card"
              >
                <img
                  src="../assets/caluculatingapp.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="Calculator web app"
                />
                <span class="project-label">Calculator App</span>
              </a>

              <a
                href="https://pocketnotify.netlify.app/"
                target="_blank"
                class="project-card"
              >
                <img
                  src="../assets/pocketnotify.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="Pocket Notify app"
                />
                <span class="project-label">Notification App</span>
              </a>

              <a
                href="https://farmxic.com"
                target="_blank"
                class="project-card"
              >
                <img
                  src="https://res.cloudinary.com/dqqycsgmn/image/upload/v1757159330/22b2b41c-076d-4b72-80e1-97a4c69cae80.png"
                  class="w-full h-auto rounded-lg border-2 border-white transition-transform hover:scale-105"
                  alt="Farmxic - Agricultural marketplace platform"
                />
                <span class="project-label">Agricultural Marketplace</span>
              </a>

              <div
                class="flex items-center justify-center bg-white bg-opacity-20 rounded-lg border-2 border-white"
              >
                <a
                  href="https://github.com/Gandokijnr"
                  class="text-white flex flex-col items-center p-4 hover:text-orange-100 transition-colors"
                >
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <span class="mt-2 font-medium">View All</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Technologies Card -->
          <div class="bg-white p-3 rounded-xl shadow-lg mt-8 hover-lift-subtle">
            <h3 class="text-3xl font-bold mb-4 text-gray-800">
              <span class="gradient-text">Utilized</span> Technologies
            </h3>

            <p class="text-gray-600 leading-relaxed mb-6">
              I leverage modern tools and frameworks to build robust, scalable,
              and user-friendly digital solutions. Staying current with industry
              trends ensures I deliver cutting-edge experiences that exceed
              expectations.
            </p>

            <!-- Tech stack badges -->
            <div class="flex flex-wrap gap-3 mt-6">
              <span class="tech-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#E34F26"
                >
                  <path
                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                  />
                </svg>
                HTML5
              </span>
              <span class="tech-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#264DE4"
                >
                  <path
                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"
                  />
                </svg>
                CSS3
              </span>
              <span class="tech-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#00DC82"
                >
                  <path
                    d="M17.646 16.74L16.06 18.882c-.225.283-.593.425-.96.425-.323 0-.647-.142-.9-.425l-1.986-2.428c-.232-.278-.297-.693-.156-1.023.11-.283.4-.502.72-.563.14-.026.28-.019.416.026.181.07.326.191.425.344l1.572 1.916 1.071-1.578c.129-.24.332-.41.582-.488.415-.122.85-.026 1.133.294.24.316.253.748.053 1.043l-.383.616zM22.923 4.85c-.692-.911-2.378-1.246-5.09-1.088-1.546-1.544-3.425-2.444-5.265-2.444-3.821 0-6.93 3.48-7.914 8.44C1.52 10.513.005 12.03.982 13.615c.692.911 2.378 1.245 5.09 1.088 1.545 1.543 3.425 2.444 5.265 2.444 3.82 0 6.93-3.48 7.914-8.442 3.132-.756 4.648-2.272 3.67-3.855zM12.471 2.286c1.323 0 2.656.684 3.821 1.92-.167.023-.324.047-.48.072-3.136.6-5.333 2.964-6.82 5.197-.986-1.068-1.874-2.313-2.56-3.682-.693-1.382-1.108-2.75-1.229-4.032 1.845-.142 4.745.124 7.268.525zm6.08 10.387c-.795 3.72-2.883 6.309-5.674 6.309-1.324 0-2.656-.683-3.821-1.919.167-.022.324-.047.48-.072 3.136-.6 5.333-2.964 6.82-5.198.986 1.07 1.874 2.314 2.56 3.682.693 1.385 1.108 2.75 1.229 4.032-1.846.143-4.745-.12-7.268-.524-1.323-1.439-2.452-3.238-3.267-5.292-.782-1.975-1.176-3.956-1.169-5.803.007-1.942.409-3.542 1.132-4.488.688-.89 1.77-.97 3.216-.24 1.846.914 3.593 2.657 4.782 4.958.782 1.976 1.177 3.957 1.17 5.804-.4.95-.08 1.859-.19 2.75zm2.986-5.13c-.7 0-1.418-.048-2.138-.143 0-1.436-.288-2.978-.867-4.573-.782-1.976-1.92-3.796-3.253-5.245 2.783-.156 4.405.192 4.99.951.781 1.03.34 3.763-2.097 6.4.449 1.003.923 2.075 1.365 3.21V8.93c.003.037 0 .079 0 .119.686.47 1.345.974 1.957 1.485l.012.012.12.009c.604.506.981.92.986.96.7.058-.65.029-.967-.01z"
                  />
                </svg>
                Vue
              </span>
              <span class="tech-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#06B6D4"
                >
                  <path
                    d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                  />
                </svg>
                Tailwind
              </span>
              <span class="tech-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#F7DF1E"
              >
                <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.526-1.444-.855-.03-.032-.055-.081-.041-.129.012-.05.053-.076.11-.076.192.003.348.125.486.29.13.151.301.375.646.375.381 0 .658-.304.658-.631 0-.331-.279-.564-.644-.671-.883-.282-1.803-.276-2.097-.94-.029-.082-.041-.167-.037-.25.005-.085.029-.168.08-.237.284-.381.915-.511 1.442-.322.26.096.495.255.683.455.204.213.38.471.598.73.384.465.857.85 1.587.962.078.016.157.023.234.023.383 0 .749-.143 1.021-.461.275-.322.385-.768.268-1.188l-.001-.002zm-4.529-1.169c-.198-.566-.623-.888-1.325-.888-.938-.001-1.492.695-1.492 1.515 0 .834.553 1.482 1.478 1.482.386 0 .813-.088 1.222-.219.227-.063.466-.169.699-.333.252-.18.553-.058.553.258 0 .199-.108.325-.198.406-.215.18-.618.354-1.02.354-1.3 0-2.121-1.109-2.121-2.466 0-1.199.731-2.075 1.902-2.075.71 0 1.22.231 1.577.645.03.036.055.078.075.123.01.023.015.047.012.071-.003.026-.015.05-.035.066l-.191.18c-.143.14-.216.164-.264.165-.029.001-.049-.008-.075-.03-.234-.203-.528-.43-1.138-.43-.778 0-1.242.457-1.242 1.241 0 .687.437 1.127 1.01 1.127.464 0 .792-.19 1.048-.485.059-.067.122-.13.192-.18.105-.077.21-.052.274.017.08.09.15.207.212.33.592 1.156 1.57 1.666 2.931 1.666.046 0 .093-.001.139-.004 1.199-.076 2.257-.726 2.257-2.478 0-1.052-.647-1.592-1.907-2.385-.616-.315-1.01-.514-1.01-.885 0-.283.224-.456.576-.456.215 0 .495.074.942.396.06.043.122.075.184.098.094.035.178.028.245-.034.079-.077.062-.217.008-.315-.11-.196-.479-.487-1.284-.487-1.227 0-1.79.812-1.79 1.604 0 .902.604 1.372 1.57 1.954.406.211.8.413.8.758 0 .271-.235.466-.638.466-.5 0-.915-.234-1.388-.743z"/>
              </svg>
              JavaScript
            </span>
            <span class="tech-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#21759B"
              >
                <path d="M3.5 12c0-1.4.5-2.8 1.3-3.9L7 12l-2.1 3.9c-.8-1.1-1.4-2.5-1.4-3.9zm14.4-6.9C16.9 3.6 14.7 3 12 3c-2.7 0-5.2.7-7.4 1.9l10.3 17.4L19 12l2.1-3.9c-1.2-2.1-1.9-4.6-1.9-7.1h-3.8c0 2.1.7 4.1 2 5.6l-3.4 6.6-3.6-6.2c.4-.3.8-.7 1.1-1.1.6-.7 1-1.6 1-2.6 0-.3 0-.5-.1-.8H12c2.1 0 4.1.8 5.6 2.3.3.3.6.6.8 1zM12 21c-1.4 0-2.8-.5-3.9-1.3L12 13.8l3.9 6.7c-1.1.8-2.5 1.5-3.9 1.5zm6.7-4.9L17 12l2.1-3.9c.8 1.1 1.4 2.5 1.4 3.9 0 1.4-.5 2.8-1.3 3.9z"/>
              </svg>
              WordPress
            </span>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
