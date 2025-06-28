<script setup>
import { ref, onMounted } from "vue";

// Card visibility
const visibleCard1 = ref(false);
const visibleCard2 = ref(false);
const visibleCard3 = ref(false);

// Toggle view
const showHighlights = ref(true);

// YouTube player refs
const players = ref([]);

// Border gradient
const gradientStyle = `
  background: linear-gradient(
    90deg,
    rgba(253, 228, 165, 0.2),
    rgba(187, 199, 205, 0.2)
  ),
  linear-gradient(
    180deg,
    rgba(253, 228, 165, 0.2),
    rgba(187, 199, 205, 0.2)
  )
`;

// Intersection observer for animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = entry.target.getAttribute("data-index");
        if (entry.isIntersecting) {
          if (index === "1") visibleCard1.value = true;
          if (index === "2") visibleCard2.value = true;
          if (index === "3") visibleCard3.value = true;
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-up-card").forEach((el) => {
    observer.observe(el);
  });

  // Load YouTube IFrame API
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);
});

// Define global function for YouTube API
window.onYouTubeIframeAPIReady = () => {
  document.querySelectorAll("iframe.youtube-video").forEach((el, index) => {
    players.value[index] = new YT.Player(el, {
      events: {
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            stopOtherVideos(index);
          }
        },
      },
    });
  });
};

// Stop other videos
function stopOtherVideos(currentIndex) {
  players.value.forEach((player, idx) => {
    if (idx !== currentIndex && player?.pauseVideo) {
      player.pauseVideo();
    }
  });
}
</script>

<template>
  <div id="features" class="py-6 px-4 md:px-8 lg:px-20">
    <!-- Highlights Section -->
    <div v-if="showHighlights" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Section Title -->
      <div class="col-span-full text-center mb-4">
        <div class="text-surface-900 dark:text-surface-0 font-semibold mb-2 text-4xl">
          Marvelous Highlights
        </div>
        <span class="text-muted-color text-2xl">Enjoy Watching...</span>
        <div class="mt-4">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition-all duration-300"
            @click="showHighlights = false"
          >
            View Programming Projects
          </button>
        </div>
      </div>

      <!-- Video Cards -->
      <div
        v-for="(video, i) in [
          { src: 'https://www.youtube.com/embed/ZAEZAez2WhA', title: 'Mine Craft', desc: 'Follow me..' },
          { src: 'https://www.youtube.com/embed/Fb9pk-4-qDI', title: 'Just a random..', desc: 'Follow me..' },
          { src: 'https://www.youtube.com/embed/3RjukuAK8gs', title: 'Fun to paly games', desc: 'Follow me..' }
        ]"
        :key="i"
        class="p-[2px] rounded-xl transition-transform duration-100 transform hover:scale-105 fade-up-card"
        :style="`${gradientStyle}; transition: all 0.8s ease-out 0ms`"
        :data-index="i + 1"
        :class="{
          'opacity-0 translate-y-8': [!visibleCard1, !visibleCard2, !visibleCard3][i],
          'opacity-100 translate-y-0': [visibleCard1, visibleCard2, visibleCard3][i]
        }"
      >
        <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl overflow-hidden shadow-md group">
          <div class="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              :id="`video-${i}`"
              class="w-full h-full rounded-lg youtube-video"
              :src="video.src + '?enablejsapi=1'"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div class="mt-4">
            <h5 class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold">
              {{ video.title }}
            </h5>
            <span class="text-surface-600 dark:text-surface-200">
              {{ video.desc }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Programming Projects Section -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="col-span-full text-center mb-4">
        <div class="text-surface-900 dark:text-surface-0 font-semibold mb-2 text-4xl">
          Programming Projects
        </div>
        <span class="text-muted-color text-2xl">Explore Code Creations...</span>
        <div class="mt-4">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition-all duration-300"
            @click="showHighlights = true"
          >
            Back to Video Highlights
          </button>
        </div>
      </div>

      <!-- Project Cards -->
      <div
        v-for="(project, i) in [
          {
            title: 'Lifewood Application System',
            desc: 'A job application portal designed for recruiters and applicants, with secure logins, application tracking, and admin dashboards.',
            image: '/demo/images/lifewood.png',
            stack: 'VueJS | Tailwind | Vite | Go'
          },
          {
            title: 'POS System',
            desc: 'A complete point-of-sale solution with inventory tracking, sales reporting, and user authentication for retail operations.',
            image: '/demo/images/inventory.png',
            stack: 'HTML | CSS | BOOTSTRAP | PHP | JAVASCRIPT'
          },
          {
            title: 'Clone Instagram',
            desc: 'A simplified social media clone with features like image posting, likes, and comment functionality, built from scratch.',
            image: '/demo/images/cloneinsta.png',
            stack: 'HTML | CSS | PHP | JAVASCRIPT | BOOTSTRAP'
          },
          {
            title: 'Water Refilling System',
            desc: 'An order and delivery management system for water refilling stations, featuring customer tracking, invoices, and delivery logs.',
            image: '/demo/images/water.png',
            stack: 'VueJS | Tailwind | Vite | Go'
          }
        ]"
        :key="i"
        class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-slate-300 dark:border-slate-700"
      >
        <div class="relative overflow-hidden rounded-xl group shadow-md">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full object-contain max-h-64 rounded-xl transition-transform duration-500 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
          <div class="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300 rounded-xl"></div>
        </div>
        <h5 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mt-4 mb-1">
          {{ project.title }}
        </h5>
        <p class="text-surface-600 dark:text-surface-200 mb-2">
          {{ project.desc }}
        </p>
        <span class="text-sm text-blue-700 dark:text-blue-300 font-mono italic">
          {{ project.stack }}
        </span>
      </div>
    </div>
  </div>
</template>
