<template>
  <section
    id="projects"
    class="services-section py-24 bg-gradient-to-b from-white to-gray-50"
  >
    <!-- Section Header with animated underline -->
    <div class="container mx-auto px-6 mb-16">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-800 relative inline-block">
          Services
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-orange-500 animate-pulse"
          ></span>
        </h2>
        <p class="text-gray-600 mt-4 max-w-xl mx-auto">
          Delivering creative solutions that blend aesthetics with functionality
        </p>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-stretch gap-12">
        <!-- Left Column - Image with floating cards -->
        <div class="lg:w-5/12 relative">
          <div class="relative h-full flex items-center">
            <!-- Background decorative elements -->
            <div
              class="absolute -left-4 -top-4 w-24 h-24 bg-orange-100 rounded-full opacity-70"
            ></div>
            <div
              class="absolute -right-4 -bottom-4 w-32 h-32 bg-orange-200 rounded-full opacity-50"
            ></div>

            <!-- Main image with border treatment -->
            <div class="relative w-full hover-lift">
              <img
                class="w-full h-auto rounded-2xl shadow-xl border-4 border-white"
                src="../assets/aboutsideimage.png"
                alt="Design process illustration"
                loading="lazy"
              />

              <!-- Floating service cards -->
              <div
                class="absolute -right-6 -top-8 bg-white p-4 rounded-lg shadow-lg max-w-xs animate-float"
              >
                <div class="flex items-center gap-3">
                  <div class="bg-orange-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff7e5f"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <span class="font-medium">UI/UX Design</span>
                </div>
              </div>

              <div
                class="absolute -left-6 bottom-10 bg-white p-4 rounded-lg shadow-lg max-w-xs animate-float-delayed"
              >
                <div class="flex items-center gap-3">
                  <div class="bg-orange-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff7e5f"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <span class="font-medium">Frontend Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Content Cards -->
        <div class="lg:w-7/12">
          <!-- Services Description Card -->
          <div class="bg-white p-8 rounded-xl shadow-lg mb-8 hover-lift-subtle">
            <h3 class="text-3xl font-bold mb-4 text-gray-800">
              <span class="gradient-text">Designing Solutions</span>, Not Just
              Visuals
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              As a passionate UI/UX designer, I'm dedicated to creating
              seamless, user-centric digital experiences. With a keen eye for
              aesthetics and a problem-solving mindset, I transform complex
              ideas into visually appealing and functionally efficient designs
              that resonate with users.
            </p>

            <!-- Service Bullets -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div class="flex items-start gap-3">
                <div
                  class="p-2 bg-orange-100 rounded-full text-orange-600 mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-800">UI Design</h4>
                  <p class="text-sm text-gray-600">
                    Creating visually stunning interfaces that engage users
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="p-2 bg-orange-100 rounded-full text-orange-600 mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    ></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-800">Prototyping</h4>
                  <p class="text-sm text-gray-600">
                    Building interactive prototypes to validate ideas early
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="p-2 bg-orange-100 rounded-full text-orange-600 mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline
                      points="22 12 18 12 15 21 9 3 6 12 2 12"
                    ></polyline>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-800">UX Research</h4>
                  <p class="text-sm text-gray-600">
                    Using data-driven insights to guide design decisions
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="p-2 bg-orange-100 rounded-full text-orange-600 mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-800">Web Development</h4>
                  <p class="text-sm text-gray-600">
                    Building responsive, accessible websites and applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Projects Showcase Card -->
          <div
            class="bg-gradient-to-r from-orange-500 to-orange-400 p-8 rounded-xl shadow-lg hover-lift-subtle"
          >
            <h3
              class="text-2xl font-bold mb-4 text-white flex items-center gap-2"
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
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                ></polygon>
              </svg>
              Completed Projects
            </h3>

            <!-- Project Grid with hover effects -->
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
          <div class="bg-white p-8 rounded-xl shadow-lg mt-8 hover-lift-subtle">
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
    </div>
  </section>
</template>
