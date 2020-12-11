<template>
  <div class="fixed w-full z-50">
    <header
      class="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
      <div
        class="flex items-center justify-between text-gray-200 px-4 py-3 sm:p-0"
      >
        <div class="">
          <div
            class="h-12 w-12 text-center flex items-center justify-center text-2xl text-gray-400 font-bold bg-gray-900 rounded-full border-4 border-gray-400"
          >
            CM
          </div>
        </div>
        <div class="sm:hidden">
          <button
            @click="showMenu = !showMenu"
            type="button"
            class="text-gray-400 hover:text-blue-300 focus:outline-none"
          >
            <svg
              class="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-show="showMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-show="!showMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="showMenu ? 'block' : 'hidden'"
        class="pb-2 uppercase font-semibold tracking-wider text-gray-400 sm:flex"
        @click="showMenu = !showMenu"
      >
        <n-link
          to="#home"
          class="block px-4 py-3 hover:bg-gray-500 hover:text-gray-700 rounded sm:tracking-widest"
          >Home</n-link
        >
        <n-link
          to="#about"
          class="block px-4 py-3 mt-1 hover:bg-gray-500 hover:text-gray-700 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >About</n-link
        >
        <n-link
          to="#projects"
          class="block px-4 py-3 mt-1 hover:bg-gray-500 hover:text-gray-700 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Projects</n-link
        >
        <n-link
          to="#contact"
          class="block px-4 py-3 mt-1 hover:bg-gray-500 hover:text-gray-700 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Contact</n-link
        >
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>