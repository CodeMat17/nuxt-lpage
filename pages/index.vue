<template>
  <div class="flex-1">
    <div v-if="$nuxt.isOnline" class="flex-1 overflow-y-auto">
      <div
        id="home"
        class="bg-cover bg-left w-full h-screen"
        :style="{
          'background-image': `url(${require('@/assets/images/dev3.webp')})`,
        }"
      >
        <div class="w-full h-full flex items-center justify-center mx-auto">
          <div
            class="bg-transparent p-4 sm:flex sm:justify-center sm:items-center"
          >
            <div
              class="mx-auto w-40 h-40 md:w-64 md:h-64 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full"
            >
              <img
                class="mx-auto w-40 h-40 md:w-64 md:h-64 p-2"
                src="@/assets/images/codemat2.webp" alt="codemat-img"
              />
            </div>
            <div class="text-gray-900 sm:ml-8">
              <h1
                class="font-bold mt-4 text-center sm:text-left text-3xl uppercase tracking-wider md:tracking-widest md:text-4xl"
              >
                Matthew Chukwu
              </h1>
              <h4
                class="text-xl font-bold text-center sm:text-left md:text-2xl md:tracking-widest"
              >
                Fullstack Software Developer
              </h4>
              <div class="flex justify-center items-center">
                <a href="mailto:matgold17@gmail.com" aria-label="Email" rel="noreferrer">
                  <div
                    class="w-12 h-12 mt-8 mr-6 flex justify-center items-center rounded-full border-4 text-gray-900 bg-gray-400 animate-bounce"
                  >
                    <img src="@/assets/svg/email.svg" alt="email-svg" class="w-8 h-8" />
                  </div>
                </a>
                <a href="https://twitter.com/matt_chuks" aria-label="Twitter" rel="noreferrer" target="_blank">
                  <div
                    class="w-12 h-12 mt-8 mr-6 flex justify-center items-center rounded-full border-4 text-gray-900 bg-gray-400 animate-bounce"
                  >
                    <img src="@/assets/svg/twitter.svg" alt="twitter-svg" class="w-8 h-8" />
                  </div>
                </a>
                <a href="https://github.com/Mctony17" aria-label="Github" rel="noreferrer" target="_blank">
                  <div
                    class="w-12 h-12 mt-8 mr-6 flex justify-center items-center rounded-full border-4 text-gray-900 bg-gray-400 animate-bounce"
                  >
                    <img src="@/assets/svg/github.svg" alt="github-svg" class="w-8 h-8" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-chukwu-48851083/" rel="noreferrer" aria-label="LinkedIn"
                  target="_blank"
                >
                  <div
                    class="w-12 h-12 mt-8 flex justify-center items-center rounded-full border-4 text-gray-900 bg-gray-400 animate-bounce"
                  >
                    <img
                      src="@/assets/svg/linkedin.svg" alt="linkedIn-svg"
                      class="w-8 h-8 fill-current"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ############About########## -->
      <div id="about">
        <div>
          <about />
        </div>
      </div>
      <!-- ############Projects########## -->
      <div id="projects">
        <div>
          <projects />
        </div>
      </div>
      <!-- ############Contact########## -->
      <div id="contact">
        <div>
          <contact />
        </div>
      </div>
      <!-- ############Footer########## -->
      <div>
        <div>
          <futta />
        </div>
      </div>
    </div>
   
      <div v-if="$nuxt.isOffline" class="w-full flex justify-center items-center mx-auto text-red-500 bg-gray-900 rounded-lg animate-pulse">
        <svg
        class="w-16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h3 class="text-center py-12 ml-4 text-xl sm:text-2xl font-semibold">You are offline!</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  head() {
    return {
      title: "codeMat - Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "codeMat Landing Page",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  }
};
</script>