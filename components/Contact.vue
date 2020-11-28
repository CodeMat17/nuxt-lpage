<template>
  <div class="px-4 py-12">
    <div
      class="uppercase text-gray-900 text-3xl text-center font-bold tracking-wider"
    >
      Contact Page
    </div>
    <div class="flex mx-auto bg-gray-900 h-1 w-40"></div>

    <div class="sm:flex justify-center items-center">
      <div class="mt-16 sm:mr-20">
        <a
          href="mailto:matgold17@gmail.com"
          aria-label="Email"
          rel="noreferrer"
        >
          <div
            class="w-24 h-24 mx-auto flex justify-center items-center rounded-full border-4 border-white shadow-xl animate-bounce"
          >
            <img
              src="@/assets/svg/email.svg"
              alt="email-icon"
              class="relative w-12 h-12"
            />
          </div>
          <p class="text-center mt-2 font-bold uppercase">email</p>
        </a>
      </div>

      <div class="mt-16 sm:mr-16">
        <a
          href="https://twitter.com/matt_chuks"
          aria-label="Twitter"
          rel="noreferrer"
          target="_blank"
        >
          <div
            class="w-24 h-24 mx-auto flex justify-center items-center rounded-full border-4 border-white shadow-xl animate-bounce"
          >
            <img
              src="@/assets/svg/twitter.svg"
              alt="twitter-icon"
              class="relative w-12 h-12"
            />
          </div>
          <p class="text-center mt-2 font-bold uppercase">twitter</p>
        </a>
      </div>

      <div class="mt-16 sm:mr-16">
        <a
          href="https://github.com/Mctony17"
          aria-label="Github"
          rel="noreferrer"
          target="_blank"
        >
          <div
            class="w-24 h-24 mx-auto flex justify-center items-center rounded-full border-4 border-white shadow-xl animate-bounce"
          >
            <img
              src="@/assets/svg/github.svg"
              alt="github-icon"
              class="relative w-12 h-12"
            />
          </div>
          <p class="text-center mt-2 font-bold uppercase">github</p>
        </a>
      </div>

      <div class="mt-16">
        <a
          href="https://www.linkedin.com/in/matthew-chukwu-48851083/"
          rel="noreferrer"
          aria-label="LinkedIn"
          target="_blank"
        >
          <div
            class="w-24 h-24 mx-auto flex justify-center items-center rounded-full border-4 border-white shadow-xl animate-bounce"
          >
            <img
              src="@/assets/svg/linkedin.svg"
              alt="linkedin-icon"
              class="relative w-12 h-12"
            />
          </div>
          <p class="text-center mt-2 font-bold uppercase">linkedIn</p>
        </a>
      </div>
    </div>
  </div>
</template>