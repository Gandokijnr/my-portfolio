<template>
  <section class="contact-section relative py-24" id="contact">
    <div class="container mx-auto px-4 z-10 relative">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
          <p class="text-lg text-gray-600 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message and
            I'll get back to you soon.
          </p>
        </div>

        <!-- Form Card -->
        <div
          class="bg-white bg-opacity-95 rounded-xl shadow-xl p-8 backdrop-blur-sm"
        >
          <form @submit="handleSubmit" class="space-y-8" name="contact" method="POST" netlify netlify-honeypot="bot-field">
            <!-- Hidden bot field for spam protection -->
            <input type="hidden" name="form-name" value="contact" />
            <div style="display: none;">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </div>
            
            <!-- Name and Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-group">
                <label for="name" class="text-gray-700 font-medium mb-2 block"
                  >Name</label
                >
                <div class="relative">
                  <span class="absolute left-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    id="name"
                    name="name"
                    v-model="formData.name"
                    type="text"
                    placeholder="Your name"
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 outline-none"
                    :class="{ 'border-red-500': errors.name }"
                    required
                  />
                </div>
                <span
                  v-if="errors.name"
                  class="text-red-500 text-sm mt-1 block"
                  >{{ errors.name }}</span
                >
              </div>

              <div class="form-group">
                <label for="email" class="text-gray-700 font-medium mb-2 block"
                  >Email</label
                >
                <div class="relative">
                  <span class="absolute left-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      />
                    </svg>
                  </span>
                  <input
                    id="email"
                    name="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="Your email"
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 outline-none"
                    :class="{ 'border-red-500': errors.email }"
                    required
                  />
                </div>
                <span
                  v-if="errors.email"
                  class="text-red-500 text-sm mt-1 block"
                  >{{ errors.email }}</span
                >
              </div>
            </div>

            <!-- Interest -->
            <div class="form-group">
              <label for="interest" class="text-gray-700 font-medium mb-2 block"
                >What are you interested in?</label
              >
              <div class="relative">
                <span class="absolute left-3 top-3 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <select
                  id="interest"
                  name="interest"
                  v-model="formData.interest"
                  class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 outline-none appearance-none"
                  :class="{ 'border-red-500': errors.interest }"
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option value="UI/UX Project">UI/UX Project</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Other">Other</option>
                </select>
                <span
                  class="absolute right-3 top-3 text-gray-400 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <span
                v-if="errors.interest"
                class="text-red-500 text-sm mt-1 block"
                >{{ errors.interest }}</span
              >
            </div>

            <!-- Message -->
            <div class="form-group">
              <label for="message" class="text-gray-700 font-medium mb-2 block"
                >Your Message</label
              >
              <div class="relative">
                <span class="absolute left-3 top-3 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <textarea
                  id="message"
                  name="message"
                  v-model="formData.message"
                  rows="4"
                  placeholder="Tell me about your project or question"
                  class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                  :class="{ 'border-red-500': errors.message }"
                  required
                ></textarea>
              </div>
              <span
                v-if="errors.message"
                class="text-red-500 text-sm mt-1 block"
                >{{ errors.message }}</span
              >
            </div>

            <!-- Submit Button -->
            <div class="mt-8">
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="mr-2">
                  <svg
                    class="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div
            v-if="formSubmitted"
            class="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="font-medium text-center">
              Thank you for your message! I'll get back to you soon. But you can
              as well talk to me directly by clicking the button in the navbar
              above
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute bottom-0 left-0 w-40 h-40 bg-orange-500 rounded-full opacity-10 -ml-20 -mb-20"
    ></div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { db } from "../firebase/config.js";
import { collection, addDoc } from "firebase/firestore";

const formData = reactive({
  name: "",
  email: "",
  interest: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  interest: "",
  message: "",
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });

  // Validate name
  if (!formData.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  }

  // Validate email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Validate interest
  if (!formData.interest) {
    errors.interest = "Please select an option";
    isValid = false;
  }

  // Validate message
  if (!formData.message.trim()) {
    errors.message = "Message is required";
    isValid = false;
  } else if (formData.message.length < 10) {
    errors.message = "Message must be at least 10 characters long";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async (event) => {
  event.preventDefault(); // Always prevent default to handle submission manually
  
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Create FormData for Netlify submission
    const formData_netlify = new FormData();
    formData_netlify.append('form-name', 'contact');
    formData_netlify.append('name', formData.name);
    formData_netlify.append('email', formData.email);
    formData_netlify.append('interest', formData.interest);
    formData_netlify.append('message', formData.message);

    // Submit to Netlify
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData_netlify).toString()
    });

    if (response.ok) {
      // Optional: Save to Firebase as backup
      try {
        await addDoc(collection(db, "contacts"), {
          name: formData.name,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
          timestamp: new Date(),
          status: "new"
        });
      } catch (firebaseError) {
        console.log("Firebase backup failed, but form submitted successfully to Netlify");
      }

      // Show success state
      formSubmitted.value = true;
      
      // Reset form data
      Object.keys(formData).forEach((key) => {
        formData[key] = "";
      });
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error submitting your form. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  background-image: url("../assets/callsection.png");
  background-position: center;
  background-size: cover;
  position: relative;
}

.contact-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.6)
  );
  z-index: 1;
}

/* Custom focus effect */
input:focus,
select:focus,
textarea:focus {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

textarea::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 10px;
}
</style>
