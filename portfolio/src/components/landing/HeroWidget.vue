<script setup>
import { ref, onMounted } from "vue";

const fullText = "I'm Ezekiel Angelo C. Pelayo";
const displayText = ref("");
let index = 0;
let isDeleting = false;

function typeWriter() {
  if (!isDeleting) {
    displayText.value = fullText.substring(0, index + 1);
    index++;
    if (index <= fullText.length) {
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 1500);
    }
  } else {
    displayText.value = fullText.substring(0, index - 1);
    index--;
    if (index >= 0) {
      setTimeout(typeWriter, 50);
    } else {
      isDeleting = false;
      setTimeout(typeWriter, 1000);
    }
  }
}

onMounted(() => {
  typeWriter();
});
</script>

<template>
  <section
    id="hero"
    class="relative flex flex-col-reverse lg:flex-row items-center justify-between 
         min-h-[94vh] sm:min-h-[85vh] lg:min-h-screen 
         px-4 sm:px-8 lg:px-20 pt-10 sm:pt-16 lg:pt-20 overflow-hidden
         bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100"
  >
    <!-- Floating gradient accent blobs -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl 
               top-[-150px] left-[-200px] animate-slow-float"
      ></div>
      <div
        class="absolute w-[600px] h-[600px] bg-pink-400/30 rounded-full blur-3xl 
               bottom-[-200px] right-[-250px] animate-slow-float-delayed"
      ></div>
    </div>

    <!-- LEFT CONTENT -->
    <div class="text-center lg:text-left max-w-2xl z-10 min-h-[40vh] ">
      <h1
        class="font-extrabold leading-tight 
               text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-500
               drop-shadow-lg text-[clamp(2rem,6vw,4.5rem)]"
      >
        <span>{{ displayText }}</span> <span class="blink">|</span>
      </h1>

      <p class="mt-6 text-gray-800 text-lg sm:text-xl leading-relaxed font-medium">
        <span class="block mb-2 font-semibold">I can do:</span>
        <div class="flex flex-wrap justify-center lg:justify-start gap-2">
          <span
            class="px-4 py-2 rounded-full text-sm sm:text-base font-semibold 
                   bg-red-100 text-red-600 hover:scale-105 transition shadow-lg"
          >Video Editing</span>
          <span
            class="px-4 py-2 rounded-full text-sm sm:text-base font-semibold 
                   bg-blue-100 text-blue-600 hover:scale-105 transition shadow-lg"
          >Graphic Design</span>
          <span
            class="px-4 py-2 rounded-full text-sm sm:text-base font-semibold 
                   bg-green-100 text-green-600 hover:scale-105 transition shadow-lg"
          >Logo Design</span>
          <span
            class="px-4 py-2 rounded-full text-sm sm:text-base font-semibold 
                   bg-purple-100 text-purple-600 hover:scale-105 transition shadow-lg"
          >Web Programming</span>
          <span
            class="px-4 py-2 rounded-full text-sm sm:text-base font-semibold 
                   bg-orange-100 text-orange-600 hover:scale-105 transition shadow-lg"
          >UI Design</span>
        </div>
      </p>
    </div>

    <!-- RIGHT IMAGE -->
    <div class="flex justify-center lg:justify-end w-full lg:w-1/2 z-0 mt-10 lg:mt-0 animate-float">
      <div
        class="relative rounded-full overflow-hidden shadow-2xl 
               bg-gradient-to-tr from-blue-200 via-pink-100 to-yellow-100
               p-2 sm:p-4 lg:p-6 max-w-[260px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px]"
      >
        <img
          src="/demo/img/profile.png"
          alt="Hero Image"
          class="rounded-full object-cover w-full h-full"
        />
        <!-- Subtle glow effect -->
        <div
          class="absolute inset-0 rounded-full border-4 border-white/40 
                 shadow-[0_0_30px_rgba(255,255,255,0.6)] pointer-events-none"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blink {
  animation: blink-animation 1s steps(2, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

/* Floating hero image animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Background blobs animation */
@keyframes slow-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-40px) translateX(30px);
  }
}
.animate-slow-float {
  animation: slow-float 18s ease-in-out infinite;
}
.animate-slow-float-delayed {
  animation: slow-float 20s ease-in-out infinite;
  animation-delay: 5s;
}
</style>
