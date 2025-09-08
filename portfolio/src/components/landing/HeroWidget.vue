<script setup>
import { ref, onMounted } from "vue";

const roles = [
  "Video Editing 🎬",
  "Web Programming 💻",
  "Graphic Designer 🎨",
  "Logo Designer ✍️",
];
const displayText = ref("");
let index = 0;
let roleIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = roles[roleIndex];

  if (!isDeleting) {
    displayText.value = currentText.substring(0, index + 1);
    index++;
    if (index <= currentText.length) {
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 1500);
    }
  } else {
    displayText.value = currentText.substring(0, index - 1);
    index--;
    if (index >= 0) {
      setTimeout(typeWriter, 50);
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeWriter, 500);
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
    class="relative flex flex-col lg:flex-row items-center justify-between min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen px-4 sm:px-6 lg:px-20 pt-10 bg-gray-800 text-gray-100"
  >
    <!-- Background blobs -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl top-[-150px] left-[-200px] animate-slow-float"
      ></div>
      <div
        class="absolute w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-3xl bottom-[-200px] right-[-250px] animate-slow-float-delayed"
      ></div>
    </div>

    <!-- Hero Content -->
    <div class="text-left lg:text-left max-w-2xl z-10 mt-16 lg:mt-20 animate-slide-fade">
      <h1 class="font-bold leading-tight drop-shadow-lg text-[clamp(2rem,6vw,4.5rem)]">
        <span class="text-white block">Hi, I'm Ezekiel Angelo C. Pelayo</span>
        <span class="text-white text-[clamp(1.25rem,3vw,2rem)]">{{ displayText }}</span>
        <span class="blink text-blue-300 text-[clamp(1.25rem,3vw,2rem)]">|</span>
      </h1>
      <p class="mt-6 text-white text-lg sm:text-xl leading-relaxed font-normal">
        I build modern, responsive web apps with clean UI and smooth UX blending design and code to create experiences that feel intuitive, fast, and delightful to use.
      </p>

      <!-- Social Icons -->
      <div class="mt-6 flex items-center justify-center lg:justify-start gap-4 animate-slide-fade-delay">
        <span class="font-semibold text-white">Follow me on:</span>

        <!-- GitHub -->
        <a href="https://github.com/Zekechan11" target="_blank" class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-gray-800 hover:text-black transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.01c0 4.417 2.865 8.165 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.068-.608.068-.608 1.004.07 1.531 1.026 1.531 1.026.892 1.528 2.341 1.085 2.912.829.091-.644.35-1.085.637-1.336-2.22-.251-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.682-.103-.252-.446-1.266.098-2.643 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.006 1.7.11 2.502.324 1.909-1.294 2.748-1.026 2.748-1.026.546 1.377.202 2.39.099 2.643.64.698 1.028 1.592 1.028 2.682 0 3.843-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C21.144 20.171 24 16.426 24 12.011 24 6.484 19.522 2 14 2c-1.896 0-3.692.518-5.232 1.488-.066.04-.125.088-.184.14-.029.027-.056.056-.08.087-.074.089-.14.184-.206.28l-.004-.004z"/>
          </svg>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/pelayo-ezekiel-angelo-c-6617a0345/" target="_blank" class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-gray-800 hover:text-blue-600 transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.27h-3v-5.604c0-1.338-.026-3.065-1.868-3.065-1.868 0-2.154 1.459-2.154 2.968v5.701h-3v-10h2.881v1.367h.041c.401-.758 1.379-1.557 2.838-1.557 3.034 0 3.592 1.997 3.592 4.59v5.6z"/>
          </svg>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/zeke_zetsu/" target="_blank" class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-gray-800 hover:text-pink-500 transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.1-54.7-44.6-99.3-99.3-99.3H102.8c-54.7 0-99.2 44.6-99.3 99.3v194.5c.1 54.7 44.6 99.3 99.3 99.3h243.5c54.7 0 99.2-44.6 99.3-99.3V163.5zM398.8 358c0 41.4-33.6 75-75 75H124.2c-41.4 0-75-33.6-75-75V154.1c0-41.4 33.6-75 75-75h199.6c41.4 0 75 33.6 75 75V358z"/>
          </svg>
        </a>

        <!-- YouTube -->
        <a href="https://www.youtube.com/@zekeeXgaming" target="_blank" class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-gray-800 hover:text-red-600 transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a2.998 2.998 0 0 0-2.11-2.11C19.709 3.5 12 3.5 12 3.5s-7.709 0-9.388.576a2.998 2.998 0 0 0-2.11 2.11C.5 7.865.5 12 .5 12s0 4.135.576 5.814a2.998 2.998 0 0 0 2.11 2.11C4.291 20.5 12 20.5 12 20.5s7.709 0 9.388-.576a2.998 2.998 0 0 0 2.11-2.11C23.5 16.135 23.5 12 23.5 12s0-4.135-.002-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
          </svg>
        </a>
      </div>

      <!-- Buttons -->
      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-fade-delay-2">
        <a href="#" class="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold transition-transform duration-300 transform hover:scale-105 shadow-xl bg-white text-gray-900">
          Explore My Project
        </a>
        <a
  href="/CV/Pelayo_Ezekiel.pdf"
  download="Ezekiel_Angelo_Pelayo.pdf"
  class="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold transition-transform duration-300 transform hover:scale-105 shadow-xl bg-transparent border border-white text-white hover:bg-white hover:text-gray-900"
>
  Download My CV
</a>
      </div>
    </div>

    <!-- Hero Image & Floating Icons -->
    <div class="flex justify-center lg:justify-start w-full lg:w-1/2 z-0 mt-10 lg:mt-0 animate-slide-fade">
      <div class="relative z-10 rounded-full overflow-hidden bg-gray-800 p-2 sm:p-3 lg:p-4 max-w-[200px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[400px] aspect-square ml-6 sm:ml-12 md:ml-24 lg:ml-32 xl:ml-40">
        <img src="/demo/img/profile.png" alt="Profile Image" class="rounded-full object-cover bg-orange-200 w-full h-full" />
      </div>

      <!-- Floating tech icons (animate entrance) -->
     <div class="absolute top-0 left-[60px] icon-wrapper bg-white backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-600/50 group">
  <img src="/demo/images/vue.png" alt="Vue.js" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-gray-200 text-gray-800 text-lg whitespace-nowrap opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
    Vue.js
  </div>
</div>


      <div class="absolute bottom-0 left-[50px] icon-wrapper -translate-x-1/2 translate-y-1/2 bg-white backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-600/50 group">
        <img src="/demo/images/react.png" alt="React" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>
        <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-200 text-gray-800 text-lg whitespace-nowrap opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
          React.js
        </div>
      </div>

      <div class="absolute top-1/4 right-[20px] icon-wrapper -translate-y-1/2 bg-white backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-600/50 group">
        <img src="/demo/images/tailwind.png" alt="Tailwind" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>
        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-gray-200 text-gray-800 text-lg whitespace-nowrap opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
          Tailwind
        </div>
      </div>

      <div class="absolute bottom-0 icon-wrapper right-[70px] translate-x-6 bg-white backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-600/50 group">
        <img src="/demo/img/capcut.png" alt="Capcut" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"/>
        <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-200 text-gray-800 text-lg whitespace-nowrap opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
          Capcut
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Blink animation for cursor */
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
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}


/* Floating small icons animation */
@keyframes floatSmall {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-float-small {
  animation: floatSmall 4s ease-in-out infinite;
}

/* Entrance animation */
@keyframes slideFadeIn {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-slide-fade {
  animation: slideFadeIn 1s ease-out forwards;
}
.animate-slide-fade-delay { animation: slideFadeIn 1s ease-out forwards; animation-delay: 0.3s; }
.animate-slide-fade-delay-2 { animation: slideFadeIn 1s ease-out forwards; animation-delay: 0.6s; }
.animate-slide-fade-delay-3 { animation: slideFadeIn 1s ease-out forwards; animation-delay: 0.9s; }
.animate-slide-fade-delay-4 { animation: slideFadeIn 1s ease-out forwards; animation-delay: 1.2s; }

/* Combine entrance + float without conflict */
.icon-wrapper {
  animation: slideFadeIn 1s ease-out forwards, floatSmall 4s ease-in-out infinite;
}

</style>
