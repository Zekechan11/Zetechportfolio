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
  <!-- NAVBAR -->
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-lg',
      isScrolled
        ? 'bg-white/80 shadow-md dark:bg-neutral-900/80'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
      <!-- Brand -->
      <a class="flex items-center gap-3" href="#hero">
        <img
          src="/demo/img/favicon.ico"
          alt="ZETECH Logo"
          class="w-12 h-12 object-contain drop-shadow-md"
        />
        <span
          class="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 bg-clip-text text-transparent"
        >
          ZEKEE
        </span>
      </a>

      <!-- Desktop Menu -->
      <ul
        class="hidden lg:flex items-center gap-10 font-semibold tracking-wide text-gray-700 dark:text-gray-200"
      >
        <li
          v-for="item in [
            { id: 'hero', label: 'Home' },
            { id: 'features', label: 'Highlights' },
            { id: 'tools', label: 'Tools' },
            { id: 'about', label: 'About' }
          ]"
          :key="item.id"
        >
          <a
            @click="smoothScroll('#' + item.id)"
            class="relative cursor-pointer transition-colors hover:text-pink-600"
            :class="activeSection === item.id ? 'text-pink-600' : ''"
          >
            {{ item.label }}
            <span
              class="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 scale-x-0 transition-transform origin-right"
              :class="activeSection === item.id ? 'scale-x-100 origin-left' : 'group-hover:scale-x-100'"
            ></span>
          </a>
        </li>
        <li>
          <button
            @click="showContactModal = true"
            class="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            Contacts
          </button>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        @click="showMobileMenu = !showMobileMenu"
        class="lg:hidden text-3xl text-gray-800 dark:text-gray-200"
      >
        <i class="pi pi-bars"></i>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="showMobileMenu"
      class="lg:hidden flex flex-col gap-6 px-6 py-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-lg"
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
        class="text-lg font-semibold text-gray-800 dark:text-gray-100"
      >
        {{ item.label }}
      </a>
      <button
        @click="showContactModal = true"
        class="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
      >
        Contacts
      </button>
    </div>
  </nav>

  <!-- Contact Modal -->
  <div
    v-if="showContactModal"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      class="relative bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-fadeInUp"
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
        <a href="mailto:pelayoezekiel96@gmail.com" target="_blank"
          class="text-red-500 hover:text-red-700 text-3xl transition-transform hover:scale-125">
          <i class="pi pi-envelope"></i>
        </a>
        <a href="https://www.facebook.com/ezekielangelo.pelayo" target="_blank"
          class="text-blue-600 hover:text-blue-800 text-3xl transition-transform hover:scale-125">
          <i class="pi pi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/zeke_zetsu/?hl=en" target="_blank"
          class="text-pink-500 hover:text-pink-700 text-3xl transition-transform hover:scale-125">
          <i class="pi pi-instagram"></i>
        </a>
        <a href="https://wa.me/+639673520009" target="_blank"
          class="text-green-500 hover:text-green-700 text-3xl transition-transform hover:scale-125">
          <i class="pi pi-whatsapp"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 0.4s ease-out;
}
</style>
