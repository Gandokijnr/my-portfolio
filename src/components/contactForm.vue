<template>
      <div class="contact-section mt-20" id="contact">
    <h4 class="text-3xl text-center font-semibold w-full pt-20">Send me a message👇</h4>
    <div class="row flex flex-col md:flex-row items-start justify-between container mx-auto gap-3 flex-wrap mt-20">
      <div class="col w-full">
        <form class="bg-transparent shadow-lg rounded px-8 pt-6 pb-20 mb-4 w-full ">
          <fieldset>
            <legend class="text-xl font-bold mb-4">Personal Information</legend>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
              </label>
              <input class="bg-transparent appearance-none border-b-2 focus:border-orange-500 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input class="bg-transparent appearance-none border-b-2 focus:border-orange-500 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email">
            </div>
          </fieldset>

          <fieldset class="mt-6">
            <legend class="text-sm font-bold mb-4">Interest</legend>
            <div class="mb-4">
              <select class="bg-transparent appearance-none border-b-2 border-black focus:border-orange-500 rounded text-gray-700rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="interest" required>
                <option value="">Select an option</option>
                <option value="Option 1">UI/UX Project</option>
                <option value="Option 1">Web Development</option>
              </select>
            </div>
          </fieldset>

          <fieldset class="mt-6">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="comments">
                Comments
              </label>
              <textarea class="bg-transparent appearance-none border-b-2 border-black focus:border-orange-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comments" rows="4" placeholder="Enter your comments"></textarea>
            </div>
          </fieldset>

          <div class="flex items-center justify-between mt-6">
            <button class="bg-orange-500 w-full hover:bg-white hover:text-orange-500 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.contact-section{
  background-image: url('../assets/callsection.png');
  background-position: center;
  background-size: cover;
  min-height: 80vh;
}
</style>