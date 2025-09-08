<script setup>
import { ref, onMounted } from "vue";

// Toggle highlights / projects
const showHighlights = ref(true);

// Section fade-in
const highlightsVisible = ref(false);

// Card visibility array (for staggered fade-in)
const visibleCards = ref([]);

// YouTube player refs
const players = ref([]);

// Images for image cards
const images = [
  {
    src: "/demo/img/edit1.png",
    title: "Photoshop BirthDay",
    desc: "Edit work 1",
  },
  {
    src: "/demo/img/edit2.png",
    title: "Photoshop BirthDay",
    desc: "Edit work 2",
  },
  {
    src: "/demo/img/edit5.png",
    title: "Photoshop BirthDay",
    desc: "Edit work 3",
  },
  {
    src: "/demo/img/edit4.png",
    title: "Illustrator Logo",
    desc: "Logo design",
  },
  {
    src: "/demo/img/edit3.png",
    title: "Photoshop Billboard",
    desc: "Billboard design",
  },
];

// Selected image for modal
const selectedImage = ref(null);
const selectedTitle = ref("");
const selectedDesc = ref("");

const openImage = (src, title, desc) => {
  selectedImage.value = src;
  selectedTitle.value = title;
  selectedDesc.value = desc;
};

// Gradient style for cards
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

// Intersection Observer for section & cards
onMounted(() => {
  // Fade-in section
  const section = document.getElementById("highlights-section");
  const sectionObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        highlightsVisible.value = true;
        sectionObserver.unobserve(section);
      }
    },
    { threshold: 0.1 }
  );
  sectionObserver.observe(section);

  // Fade-in cards with stagger
  const cards = document.querySelectorAll(".fade-up-card");
  cards.forEach((el, i) => {
    visibleCards.value[i] = false; // Initialize
  });

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          setTimeout(() => {
            visibleCards.value[index] = true;
          }, index * 150); // stagger 150ms
        }
      });
    },
    { threshold: 0.1 }
  );
  cards.forEach((el, i) => {
    el.setAttribute("data-index", i);
    cardObserver.observe(el);
  });

  // Load YouTube API
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);
});

// YouTube API
window.onYouTubeIframeAPIReady = () => {
  document.querySelectorAll("iframe.youtube-video").forEach((el, index) => {
    players.value[index] = new YT.Player(el, {
      events: {
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) stopOtherVideos(index);
        },
      },
    });
  });
};

function stopOtherVideos(currentIndex) {
  players.value.forEach((player, idx) => {
    if (idx !== currentIndex && player?.pauseVideo) player.pauseVideo();
  });
}

// Programming projects
const projects = [
  {
    title: "Lifewood Application System",
    desc: "A job application portal with secure logins, tracking, and dashboards.",
    image: "/demo/images/lifewood.png",
    stack: "VueJS | Tailwind | Vite | Go",
  },
  {
    title: "POS System",
    desc: "Point-of-sale with inventory tracking, sales reporting, and authentication.",
    image: "/demo/images/inventory.png",
    stack: "HTML | CSS | Bootstrap | PHP | Javascript",
  },
  {
    title: "Clone Instagram",
    desc: "Social media clone with image posting, likes, comments.",
    image: "/demo/images/cloneinsta.png",
    stack: "HTML | CSS | PHP | Javascript | Bootstrap",
  },
  {
    title: "Water Refilling System",
    desc: "Order & delivery management system with customer tracking and invoices.",
    image: "/demo/images/water.png",
    stack: "VueJS | Tailwind | Vite | Go",
  },
];
</script>

<template>
  <div id="features" class="py-6 px-4 md:px-8 lg:px-20 bg-gray-800 text-white">
    <!-- Marvelous Highlights Section -->
    <div
      v-if="showHighlights"
      id="highlights-section"
      :class="{
        'opacity-0 translate-y-12': !highlightsVisible,
        'opacity-100 translate-y-0': highlightsVisible,
      }"
      class="transition-all duration-700 ease-out"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 lg:mt-24"
      >
        <!-- Section Title -->
        <div class="col-span-full text-center mb-4">
          <div class="font-semibold mb-2 text-4xl">Videos Project</div>
          <span class="text-gray-400 text-2xl">Enjoy Watching...</span>
          <div class="mt-4 flex justify-center gap-2">
            <button
              :class="
                showHighlights
                  ? 'bg-white text-gray-800'
                  : 'bg-white text-gray-300'
              "
              class="inline-flex items-center gap-2 px-4 py-4 border border-gray-200 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out bg-gray-800 font-semibold"
              @click="showHighlights = true"
            >
              <span>🎬 Videos Project</span>
            </button>
            <button
              :class="
                !showHighlights
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-800 text-gray-300'
              "
              class="inline-flex items-center gap-2 px-4 py-4 border border-gray-200 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out bg-gray-800 font-semibold"
              @click="showHighlights = false"
            >
              <span>💻 Programming Projects</span>
            </button>
          </div>
        </div>

        <!-- Video Cards -->
        <div
          v-for="(video, i) in [
            {
              src: 'https://www.youtube.com/embed/Mw13l2AJc6Y',
              title: 'I got the King Cabbage | GROW A GARDEN!',
              desc: 'Follow me..',
            },
            {
              src: 'https://www.youtube.com/embed/Fb9pk-4-qDI',
              title: 'My First Animation',
              desc: 'Follow me..',
            },
            {
              src: 'https://www.youtube.com/embed/HIBTQyh46Ss',
              title: 'The BIGGEST ENKAKU | GROW A GARDEN!',
              desc: 'Follow me..',
            },
            {
              src: 'https://www.youtube.com/embed/fugTayXYxdY',
              title: 'The BIGGEST Hinomai | GROW A GARDEN!',
              desc: 'Follow me..',
            },
          ]"
          :key="'video-' + i"
          class="p-[2px] rounded-xl transition-transform transform hover:scale-105 fade-up-card"
          :style="`${gradientStyle}; transition: all 0.8s ease-out`"
          :class="{
            'opacity-0 translate-y-8': !visibleCards[i],
            'opacity-100 translate-y-0': visibleCards[i],
          }"
        >
          <div
            class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl overflow-hidden shadow-md group"
          >
            <div class="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                :id="`video-${i}`"
                class="w-full h-full rounded-lg youtube-video"
                :src="video.src + '?enablejsapi=1'"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div class="mt-4">
              <h5
                class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold"
              >
                {{ video.title }}
              </h5>
              <span class="text-surface-600 dark:text-surface-200">{{
                video.desc
              }}</span>
            </div>
          </div>
        </div>

        <!-- Image Cards -->
        <div
          v-for="(image, i) in images"
          :key="'img-' + i"
          class="p-[2px] rounded-xl transition-transform duration-100 transform hover:scale-105 fade-up-card cursor-pointer"
          :style="`${gradientStyle}; transition: all 0.8s ease-out`"
          :class="{
            'opacity-0 translate-y-8': !visibleCards[i + 3],
            'opacity-100 translate-y-0': visibleCards[i + 3],
          }"
          @click="openImage(image.src, image.title, image.desc)"
        >
          <div
            class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl overflow-hidden shadow-md group"
          >
            <div class="relative aspect-video rounded-lg overflow-hidden">
              <img
                :src="image.src"
                class="w-full h-full object-cover rounded-lg hover:opacity-90 transition"
                :alt="image.title"
              />
            </div>
            <div class="mt-4">
              <h5
                class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold"
              >
                {{ image.title }}
              </h5>
              <span class="text-surface-600 dark:text-surface-200">{{
                image.desc
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Fullscreen Modal -->
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
        @click="selectedImage = null"
      >
        <img
          :src="selectedImage"
          class="max-h-[80%] max-w-[90%] rounded-lg shadow-lg"
        />
      </div>
    </div>

    <!-- Programming Projects Section -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="col-span-full text-center mb-4">
        <div class="text-white font-semibold mb-2 text-4xl mt-16 lg:mt-24">
          Programming Projects
        </div>
        <span class="text-gray-400 text-2xl">Explore Code Creations...</span>
        <div class="mt-4 flex justify-center gap-2">
          <button
            :class="
              showHighlights
                ? 'bg-white text-gray-800'
                : 'bg-gray-800 text-gray-300'
            "
            class="inline-flex items-center gap-2 px-4 py-4 border border-gray-200 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out bg-gray-800 font-semibold"
            @click="showHighlights = true"
          >
            <span>🎬 Videos Project</span>
          </button>
          <button
            :class="
              !showHighlights
                ? 'bg-white text-gray-800'
                : 'bg-white text-gray-800'
            "
            class="inline-flex items-center gap-2 px-4 py-4 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out bg-gray-800 font-semibold"
            @click="showHighlights = false"
          >
            <span>💻 Programming Projects</span>
          </button>
        </div>
      </div>

      <!-- Project Cards -->
      <div
        v-for="(project, i) in projects"
        :key="'project-' + i"
        class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-slate-300 dark:border-slate-700"
      >
        <div class="relative overflow-hidden rounded-xl group shadow-md">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full object-contain max-h-64 rounded-xl transition-transform duration-500 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300 rounded-xl"
          ></div>
        </div>
        <h5
          class="text-xl font-semibold text-surface-900 dark:text-surface-0 mt-4 mb-1"
        >
          {{ project.title }}
        </h5>
        <p class="text-surface-600 dark:text-surface-200 mb-2">
          {{ project.desc }}
        </p>
        <span
          class="text-sm text-blue-700 dark:text-blue-300 font-mono italic"
          >{{ project.stack }}</span
        >
      </div>
    </div>
  </div>
</template>
