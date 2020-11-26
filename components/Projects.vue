<template>
  <div class="bg-gray-400 px-4 py-12">
    <div
      class="uppercase text-gray-900 text-3xl text-center font-bold tracking-wider"
    >
      Recent Projects
    </div>
     <div
      class="flex mx-auto text-center bg-gray-900 h-1 w-40"
    >
      
    </div>
    <div v-for="project in projects" :key="project" class="mt-12">
      <div class="max-w-md mx-auto sm:flex sm:max-w-2xl sm:items-center sm:justify-center sm:my-8 rounded-lg overflow-hidden my-4 bg-gray-200 shadow-xl">
        <img class="w-full sm:w-64 sm:h-64 object-cover sm:object-left" :src="project.image" alt="project-img" />
        <div class="px-2 py-4 sm:px-4">
          <h4 class="text-gray-900 text-xl sm:text-3xl font-bold tracking-widest">{{ project.title }}</h4>
          <p class="mt-2 leading-tight text-gray-700 sm:text-xl font-semibold tracking-wide">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "E-Commerce",
          image: require("assets/images/ecommerce.webp"),
          description:
            "For this project, I use Nuxt, GraphQl for the frontend, Strapi, MongoDB for the backend and Snipcart for order management and secured payment .",
        },
        {
          title: "Payslip",
          image: require("assets/images/gearr.webp"),
          description:
            "This project was designed for a corporate organisation as payslip database for staff easy accessing. (image unavailable)",
        },
        {
          title: "My Landing Page",
          image: require("assets/images/lpage.webp"),
          description:
            "This is what you are watching. I decided to recreate my landing page from Flutter-Web to Nuxt.",
        },
        {
          title: "Nuxt-Strapi Auth App",
          image: require("assets/images/strapi-auth.png"),
          description:
            "Here I recreated the use of Strapi authentication and @nuxtjs/auth for user authentication with jwt in nuxt projects.",
        },
      ],
    };
  },
};
</script>
