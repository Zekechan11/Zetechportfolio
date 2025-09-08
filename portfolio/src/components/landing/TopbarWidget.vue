<script setup>
import { ref, onMounted } from "vue";

const activeSection = ref("hero");
const showMobileMenu = ref(false);
const showContactModal = ref(false);

function smoothScroll(id) {
  activeSection.value = id.replace("#", "");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  showMobileMenu.value = false;
}

function closeContactModal() {
  showContactModal.value = false;
}

const isScrolled = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 20;
  });
});
</script>

<template>
  <!-- Navbar with fade-down entrance -->
  <transition name="slide-fade-down">
    <nav
      :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-lg shadow-lg',
        isScrolled
          ? 'bg-gray-900/90 shadow-xl dark:bg-neutral-900/80'
          : 'bg-transparent text-gray-100'
      ]"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <a class="flex items-center gap-3" href="#hero">
          <span class="text-2xl font-extrabold text-white bg-clip-text text-transparent">
            ZEKEE
          </span>
        </a>

        <ul class="hidden lg:flex items-center gap-10 font-semibold tracking-wide"
            :class="isScrolled ? 'text-gray-200' : 'text-gray-100'">
          <li v-for="item in [
              { id: 'hero', label: 'Home' },
              { id: 'features', label: 'Highlights' },
              { id: 'tools-section', label: 'Tools' },
              { id: 'about', label: 'About' }
            ]"
            :key="item.id"
          >
            <a
              @click="smoothScroll('#' + item.id)"
              class="relative cursor-pointer transition-colors px-3 py-1 rounded-md"
              :class="activeSection === item.id ? 'text-gray-900' : 'hover:text-blue-600'"
            >
              {{ item.label }}
              <span
                class="absolute inset-0 rounded-md bg-white opacity-0 transition-all duration-300 -z-10"
                :class="activeSection === item.id ? 'opacity-100' : 'group-hover:opacity-100'"
              ></span>
            </a>
          </li>
          <li>
            <button
              @click="showContactModal = true"
              class="text-white px-5 py-2 transition-transform hover:text-blue-600"
            >
              Contacts
            </button>
          </li>
        </ul>

        <button
          @click="showMobileMenu = !showMobileMenu"
          class="lg:hidden text-3xl"
          :class="isScrolled ? 'text-white' : 'text-gray-100'"
        >
          <i class="pi pi-bars"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide-fade">
        <div
          v-if="showMobileMenu"
          class="lg:hidden flex flex-col gap-4 px-6 py-6 bg-gray-800/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-lg rounded-b-2xl"
        >
          <a
            v-for="item in [
              { id: 'hero', label: 'Home' },
              { id: 'features', label: 'Highlights' },
              { id: 'tools', label: 'Tools' },
              { id: 'about', label: 'About' }
            ]"
            :key="item.id"
            @click="smoothScroll('#' + item.id)"
            class="text-lg font-semibold text-gray-100 dark:text-gray-100 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            {{ item.label }}
          </a>
          <button
            @click="showContactModal = true"
            class="text-lg font-semibold text-gray-100 dark:text-gray-100 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors text-left"
          >
            Contacts
          </button>
        </div>
      </transition>
    </nav>
  </transition>

  <!-- Contact Modal -->
  <transition name="slide-fade">
    <div
      v-if="showContactModal"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        class="relative bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-lg"
      >
        <button
          @click="closeContactModal"
          class="absolute top-3 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl"
        >
          ✕
        </button>
        <h2
          class="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 bg-clip-text text-transparent mb-6"
        >
          Let's Connect
        </h2>
        <p class="text-center text-gray-700 dark:text-gray-300 mb-6">
          Reach out to me via socials below
        </p>
        <div class="flex justify-center gap-6">
          <a href="mailto:pelayoezekiel96@gmail.com" target="_blank" class="text-red-500 hover:text-red-700 text-3xl transition-transform hover:scale-125">
            <i class="pi pi-envelope"></i>
          </a>
          <a href="https://www.facebook.com/ezekielangelo.pelayo" target="_blank" class="text-blue-600 hover:text-blue-800 text-3xl transition-transform hover:scale-125">
            <i class="pi pi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/zeke_zetsu/?hl=en" target="_blank" class="text-pink-500 hover:text-pink-700 text-3xl transition-transform hover:scale-125">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="https://wa.me/+639673520009" target="_blank" class="text-green-500 hover:text-green-700 text-3xl transition-transform hover:scale-125">
            <i class="pi pi-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Navbar slide-down entrance */
.slide-fade-down-enter-active {
  animation: slideFadeDown 0.5s ease-out forwards;
}
.slide-fade-down-leave-active {
  animation: slideFadeUp 0.3s ease-in forwards;
}

/* Mobile menu & modal slide + fade */
.slide-fade-enter-active {
  animation: slideFadeIn 0.35s ease-out forwards;
}
.slide-fade-leave-active {
  animation: slideFadeOut 0.25s ease-in forwards;
}

/* Keyframes */
@keyframes slideFadeDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideFadeUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
}

@keyframes slideFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideFadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
