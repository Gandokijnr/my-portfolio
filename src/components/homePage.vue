<template>
  <main id="top" class="animate-fade-in">
    <div class="hero-container">
      <div class="container mx-auto px-6 py-16 md:py-24">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <!-- Left Content Column -->
          <div class="flex flex-col gap-6 md:w-1/2 order-2 md:order-1">
            <!-- Improved typography hierarchy -->
            <div class="intro-section">
              <span
                class="text-orange-500 font-medium text-lg md:text-xl mb-2 block"
                >Welcome to my portfolio</span
              >
              <h1
                class="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800"
              >
                <span class="block mb-1">Hello, I'm</span>
                <span class="text-5xl md:text-6xl lg:text-7xl gradient-text"
                  >Gandoki Jr</span
                >
              </h1>
              <div class="flex items-center my-4">
                <div class="h-1 w-16 bg-orange-500 mr-4"></div>
                <p class="font-semibold text-2xl md:text-3xl text-gray-700">
                  Digital Marketer & Frontend Developer
                </p>
              </div>
            </div>

            <p
              class="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
            >
              I create intuitive digital experiences that blend aesthetics with
              functionality. Transforming complex problems into elegant,
              user-centered design solutions is my passion.
            </p>

            <!-- Enhanced CTA section -->
            <div class="flex flex-wrap gap-5 mt-6">
              <a
                href="https://drive.google.com/file/d/1Sw4Tein5C1Ok443Urc8_70K1mfxnwAHj/view?usp=drive_link"
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
                class="w-full h-auto max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white"
                src="../assets/backgroundimage.png"
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
</template>

<style scoped>
/* Base styles with improved background */
main {
  background-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.8)
    ),
    url("../assets/background.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
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

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .hero-container {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }

  .gradient-text {
    font-size: 2.5rem;
  }
}
</style>
