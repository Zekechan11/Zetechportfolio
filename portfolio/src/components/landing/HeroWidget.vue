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
           min-h-screen px-6 sm:px-10 lg:px-20 pt-20 overflow-hidden
           bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100"
  >
    <!-- Gradient Accent Blobs -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute w-[600px] h-[600px] bg-blue-300 rounded-full blur-3xl opacity-30
               top-[-150px] left-[-200px] animate-pulse"
      ></div>
      <div
        class="absolute w-[700px] h-[700px] bg-pink-300 rounded-full blur-3xl opacity-30
               bottom-[-200px] right-[-250px] animate-pulse"
      ></div>
    </div>

    <!-- LEFT CONTENT -->
    <div class="text-center lg:text-left max-w-2xl z-10">
      <h1
        class="font-extrabold leading-tight text-gray-900 
               text-[clamp(2rem,6vw,4.5rem)]"
      >
        <span>{{ displayText }}</span><span class="blink">|</span>
      </h1>

      <p
        class="mt-4 text-gray-700 leading-relaxed
               text-[clamp(1rem,2vw,1.5rem)]"
      >
        I can do Editor, Programmer, UI Designer
      </p>
    </div>

    <!-- RIGHT IMAGE in Circle -->
    <div
      class="flex justify-center lg:justify-end w-full lg:w-1/2 z-0 animate-float"
    >
      <div
        class="relative rounded-full overflow-hidden shadow-2xl 
               bg-gradient-to-tr from-blue-200 via-pink-100 to-yellow-100
               p-2 sm:p-4 lg:p-6 max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[520px]"
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
</style>
