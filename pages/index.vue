<template>
  <div class="flex-1 overflow-y-auto">
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
            class="mx-auto w-40 h-40 md:w-64 md:h-64 bg-gradient-to-r from-orange-400 via-red-500 to-pink-700 rounded-full"
          >
            <img
              class="mx-auto w-40 h-40 md:w-64 md:h-64 p-2"
              src="@/assets/images/codemat2.webp"
              alt="codemat-img"
            />
          </div>
          <div class="text-gray-900 sm:ml-8">
            <h1
              class="font-bold mt-4 text-center sm:text-left text-3xl uppercase tracking-wider md:tracking-widest md:text-4xl"
            >
              Chukwu Matthew
            </h1>
            <h4
              class="text-xl font-bold text-center sm:text-left md:text-2xl md:tracking-widest"
            >
              Fullstack Software Developer
            </h4>
            <div class="flex justify-center items-center">
              <a
                href="mailto:matgold17@gmail.com"
                aria-label="Email"
                rel="noreferrer"
              >
                <div
                  class="w-12 h-12 mt-8 mr-6 flex justify-center items-center rounded-full border-4 hover:border-gray-900 text-gray-900 bg-gray-400 animate-bounce"
                >
                  <img
                    src="@/assets/svg/email.svg"
                    alt="email-svg"
                    class="w-8 h-8"
                  />
                </div>
              </a>
              <a
                href="https://twitter.com/matt_chuks"
                aria-label="Twitter"
                rel="noreferrer"
                target="_blank"
              >
                <div
                  class="w-12 h-12 mt-8 mr-6 flex justify-center items-center rounded-full border-4 hover:border-gray-900 text-gray-900 bg-gray-400 animate-bounce"
                >
                  <img
                    src="@/assets/svg/twitter.svg"
                    alt="twitter-svg"
                    class="w-8 h-8"
                  />
                </div>
              </a>
              <a
                href="https://github.com/Mctony17"
                aria-label="Github"
                rel="noreferrer"
                target="_blank"
              >
                <div
                  class="w-12 h-12 mt-8 mr-6 flex justify-center items-center rounded-full border-4 hover:border-gray-900 text-gray-900 bg-gray-400 animate-bounce"
                >
                  <img
                    src="@/assets/svg/github.svg"
                    alt="github-svg"
                    class="w-8 h-8"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-chukwu-48851083/"
                rel="noreferrer"
                aria-label="LinkedIn"
                target="_blank"
              >
                <div
                  class="w-12 h-12 mt-8 flex justify-center items-center rounded-full border-4 hover:border-gray-900 text-gray-900 bg-gray-400 animate-bounce"
                >
                  <img
                    src="@/assets/svg/linkedin.svg"
                    alt="linkedIn-svg"
                    class="w-8 h-8 fill-current"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
      <div class="relative">
        <div
          class="w-full max-w-xl mx-auto border rounded-md shadow-md hover:shadow-xl mt-12 overflow-hidden"
        >
          <div class="bg-blue-500 text-gray-100 p-4">
            <p class="font-bold text-2xl tracking-widest uppercase">About Me</p>
          </div>
          <div class="text-center text-lg p-4 space-y-4">
            <p>I am enchanted by technologies and what they can do.</p>
            <p>
              I so much believe in continous learning to rebuild my capabilities
              in providing new, relevant and powerful software solutions.
            </p>
            <p>
              I also love giving back to the tech community by mentoring of the
              younger developers.
            </p>
          </div>
        </div>
        <div class="absolute top-0 right-0 mx-4 rounded-full ">
          <img src="@/assets/svg/about.svg" alt="about svg" class="h-32 w-32" />
        </div>
      </div>
      <div class="relative">
      <div
        class="w-full max-w-xl mx-auto border rounded-md shadow-md hover:shadow-xl mt-12 overflow-hidden"
      >
        <div class="bg-blue-500 text-gray-100 p-4">
          <p class="font-bold text-2xl tracking-widest uppercase">
            My Stack of interest
          </p>
        </div>
        <div class="text-center text-lg p-4 space-y-4">
          <p>Vuejs</p>
          <p>Nuxtjs</p>
          <p>Strapi</p>
          <p>GraphQL</p>
        </div>
      </div>
      <div class="absolute top-0 right-0 mx-4 rounded-full ">
          <img src="@/assets/svg/stack.svg" alt="about svg" class="h-32 w-32" />
        </div>
      </div>
      <div class="relative">
      <div
        class="w-full max-w-xl mx-auto border rounded-md shadow-md hover:shadow-xl mt-12 overflow-hidden"
      >
        <div class="bg-blue-500 text-gray-100 p-4">
          <p class="font-bold text-2xl tracking-widest uppercase">
            Coding Skills
          </p>
        </div>
        <div class="text-center text-lg p-4 space-y-4">
          <p>E-commerce Mobile Web App</p>
          <p>Payslip Generation Mobile Web App</p>
          <p>School Management Website</p>
          <p>Etc</p>
        </div>
      </div>
      <div class="absolute top-0 right-0 mx-4 rounded-full ">
          <img src="@/assets/svg/code-skills.svg" alt="about svg" class="h-32 w-32" />
        </div>
      </div>
      <div class="relative">
      <div
        class="w-full max-w-xl mx-auto border rounded-md shadow-md mt-12 overflow-hidden hover:shadow-xl"
      >
        <div class="bg-blue-500 text-gray-100 p-4">
          <p class="font-bold text-2xl tracking-widest uppercase">
            Administrative Skills
          </p>
        </div>
        <div class="text-center text-lg p-4 space-y-4">
          <p>Policy, Strategy And Leadership Course, 20</p>
          <p>Illicit Trade, Security& Enforcement Duties</p>
          <p>Strategies For Revenue Generation</p>
          <p>Etc</p>
        </div>
      </div>
       <div class="absolute top-0 right-0 mx-4 rounded-full ">
          <img src="@/assets/svg/admin-skills.svg" alt="about svg" class="h-32 w-32" />
        </div>
      </div>
      <div class="relative">
      <div
        class="w-full max-w-xl mx-auto border rounded-md shadow-md hover:shadow-xl mt-12 overflow-hidden"
      >
        <div class="bg-blue-500 text-gray-100 p-4">
          <p class="font-bold text-2xl tracking-widest uppercase">Articles</p>
        </div>
        <div class="text-center text-lg p-4 space-y-4">
          <a
            href="https://codemat.hashnode.dev/a-step-by-step-approach-how-to-connect-your-nuxt-app-to-mongodb-authenticate-with-nuxtjsstrapi-and-query-api-using-graphql-and-apollo"
            rel="noreferrer"
            aria-label="LinkedIn"
            target="_blank"
            >A Step By Step Approach: How To Connect Your Nuxt App To MongoDB,
            Authenticate With @nuxtjs/strapi And Query API Using GraphQL &
            Apollo.</a
          >
        </div>
      </div>
      <div class="absolute top-0 right-0 mx-4 rounded-full ">
          <img src="@/assets/svg/articles.svg" alt="about svg" class="h-32 w-32" />
        </div>
      </div>
      <div class="relative">
      <div
        id="contact"
        class="w-full max-w-xl mx-auto border rounded-md shadow-md hover:shadow-xl my-12 overflow-hidden"
      >
        <div class="bg-blue-500 text-gray-100 p-4">
          <p class="font-bold text-2xl tracking-widest uppercase">Contact Me</p>
        </div>
        <div class="px-4 py-12 flex items-center justify-around">
          <div
            class="rounded-full p-2 border-4 border-white hover:border-gray-300"
          >
            <a href="mailto:matgold17@gmail.com?subject=Mail from my LP: ">
              <img
                src="@/assets/svg/email.svg"
                alt="email-icon"
                class="relative w-12 h-12"
              />
            </a>
          </div>
          <div
            class="rounded-full p-2 border-4 border-white hover:border-gray-300"
          >
            <a
              href="https://twitter.com/matt_chuks"
              aria-label="Twitter"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="@/assets/svg/twitter.svg"
                alt="email-icon"
                class="relative w-12 h-12"
              />
            </a>
          </div>
          <div
            class="rounded-full p-2 border-4 border-white hover:border-gray-300"
          >
            <a
              href="https://github.com/Mctony17"
              aria-label="Twitter"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="@/assets/svg/github.svg"
                alt="email-icon"
                class="relative w-12 h-12"
              />
            </a>
          </div>
          <div
            class="rounded-full p-2 border-4 border-white hover:border-gray-300"
          >
            <a
              href="https://www.linkedin.com/in/matthew-chukwu-48851083/"
              aria-label="Twitter"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="@/assets/svg/linkedin.svg"
                alt="email-icon"
                class="relative w-12 h-12"
              />
            </a>
          </div>
        </div>
        </div>
          <div class="absolute top-0 right-0 mx-4 rounded-full ">
          <img src="@/assets/svg/contact.svg" alt="about svg" class="h-32 w-32" />
        </div>
      </div>
    </div>
    <!-- ############Footer########## -->
    <div>
      <div>
        <futta />
      </div>
    </div>
    <!-- ############Modal########## -->
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

  data() {
    return {
      modalState: false,
    };
  },
  methods: {
    refresh() {
      this.$nuxt.refresh();
      this.modalState = false;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  },
};
</script>