<script setup>
import { ref, onMounted, nextTick } from "vue";

// Toggle between editing and programming tools
const showEditingTools = ref(true);

// Editing and programming tools
const editingTools = [
  {
    title: "Adobe Premiere Pro",
    icon: "/demo/img/premiere.png",
    description:
      "Professional timeline-based video editing with advanced tools.",
    bgClass: "bg-blue-100",
  },
  {
    title: "CapCut",
    icon: "/demo/img/capcut.png",
    description:
      "Easy and fast editing for social videos with ready-made effects.",
    bgClass: "bg-gray-200",
  },
  {
    title: "Adobe After Effects",
    icon: "/demo/img/after-effects.png",
    description: "Motion graphics and visual effects for next-level animation.",
    bgClass: "bg-indigo-100",
  },
  {
    title: "Adobe Photoshop",
    icon: "/demo/img/photoshop.png",
    description:
      "Industry-standard photo editing and graphic manipulation software.",
    bgClass: "bg-indigo-100",
  },
  {
    title: "Adobe Illustrator",
    icon: "/demo/img/illustrator.png",
    description:
      "Vector-based graphic design perfect for logos, illustrations, and typography.",
    bgClass: "bg-indigo-100",
  },
];

const programmingTools = [
  {
    title: "HTML",
    icon: "/demo/images/html.png",
    description:
      "The standard markup language for structuring web content and applications.",
    bgClass: "bg-blue-100",
  },
  {
    title: "CSS",
    icon: "/demo/images/css.png",
    description:
      "Style sheet language used for describing the presentation of web pages.",
    bgClass: "bg-gray-100",
  },
  {
    title: "Javascript",
    icon: "/demo/images/javascript.png",
    description:
      "Dynamic programming language that brings interactivity to websites and web apps.",
    bgClass: "bg-orange-100",
  },
  {
    title: "Tailwind",
    icon: "/demo/images/tailwind.png",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    bgClass: "bg-sky-100",
  },
  {
    title: "Figma",
    icon: "/demo/images/figma.png",
    description:
      "Collaborative interface design tool used for creating wireframes, prototypes, and UIs.",
    bgClass: "bg-pink-100",
  },
  {
    title: "Bootstrap",
    icon: "/demo/images/bootstrap.png",
    description:
      "Popular CSS framework for building responsive and mobile-first websites.",
    bgClass: "bg-purple-100",
  },
  {
    title: "VUE.JS",
    icon: "/demo/images/vue.png",
    description:
      "Progressive JavaScript framework for building user interfaces and single-page applications.",
    bgClass: "bg-green-100",
  },
  {
    title: "REACT",
    icon: "/demo/images/react.png",
    description:
      "A powerful JavaScript library for building fast, scalable, and interactive user interfaces.",
    bgClass: "bg-blue-100",
  },
];

// Dynamic card visibility based on longest array
const maxCount = Math.max(editingTools.length, programmingTools.length);
const visibleCards = ref(Array(maxCount).fill(false));
const sectionVisible = ref(false); // New: section entrance

// Observer setup
let observer;

onMounted(() => {
  setupObserver();
});

const toggleTools = (isEditing) => {
  showEditingTools.value = isEditing;
  nextTick(() => {
    setupObserver();
  });
};

function setupObserver() {
  visibleCards.value = Array(maxCount).fill(false);
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          visibleCards.value[index] = true;
        }
        if (entry.target.id === "tools-section" && entry.isIntersecting) {
          sectionVisible.value = true; // Section entrance triggered
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".fade-right-card").forEach((el) => {
    observer.observe(el);
  });

  const sectionEl = document.getElementById("tools-section");
  if (sectionEl) observer.observe(sectionEl);
}
</script>

<template>
  <!-- Section with entrance animation -->
  <section
    id="tools-section"
    :class="[
      'py-6 px-6 lg:px-20 mx-0 lg:mx-20 transition-transform duration-700 ease-out mt-16',
      sectionVisible ? 'fade-slide-up' : 'opacity-0 translate-y-10'
    ]"
  >
    <div class="grid grid-cols-12 gap-4 justify-center">
      <div class="col-span-12 text-center mt-6 mb-6">
        <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">
          {{ showEditingTools ? "My Editing Tools" : "My Programming Tools" }}
        </div>
        <span class="text-muted-color text-2xl">
          {{
            showEditingTools
              ? "These are the apps I use to bring videos to life."
              : "These are the tools I use to build and test software."
          }}
        </span>

        <!-- Toggle Button -->
        <div class="text-center mb-10 mt-10 flex justify-center gap-2">
          <!-- Editing Tools Button -->
          <button
           @click="toggleTools(true)"
            :class="[
              'inline-flex items-center gap-2 px-4 py-4 border rounded-lg font-semibold transition-colors duration-200 ease-in-out',
              showEditingTools
                ? 'bg-gray-800 text-white border-gray-300'
                : 'bg-white text-gray-800 border-gray-800 hover:bg-gray-700 hover:text-white',
            ]"
          >
            🎬 Editing Tools
          </button>

          <!-- Programming Tools Button -->
          <button
            @click="toggleTools(false)"
            :class="[
              'inline-flex items-center gap-2 px-4 py-4 border rounded-lg font-semibold transition-colors duration-200 ease-in-out',
              !showEditingTools
                ? 'bg-gray-800 text-white border-gray-300'
                : 'bg-white text-gray-800 border-gray-800 hover:bg-gray-700 hover:text-white',
            ]"
          >
            💻 Programming Projects
          </button>
        </div>
      </div>

      <!-- Tool Cards -->
      <div
        v-for="(tool, index) in showEditingTools ? editingTools : programmingTools"
        :key="index"
        class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 fade-right-card"
        :data-index="index"
        :class="[
          'transition-transform duration-700',
          visibleCards[index] ? 'flip-in' : 'opacity-0',
        ]"
      >
        <div class="relative animated-border-wrapper hover:scale-105 shadow-lg">
          <div
            class="relative z-10 p-4 bg-surface-0 dark:bg-surface-900 h-full rounded-lg"
            style="background-color: #d5dbdb"
          >
            <div
              class="flex items-center justify-center mb-4"
              :class="tool.bgClass"
              style="width: 3.5rem; height: 3.5rem; border-radius: 10px; background-color: white;"
            >
              <img
                :src="tool.icon"
                :alt="tool.title"
                class="w-7 h-7 object-contain"
              />
            </div>
            <h5 class="mb-2 text-surface-900 dark:text-surface-0">{{ tool.title }}</h5>
            <span class="text-surface-600 dark:text-surface-200">{{ tool.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section entrance animation */
.fade-slide-up {
  animation: fadeSlideUp 0.6s ease-out forwards;
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Existing card animation */
.animated-border-wrapper {
  position: relative;
  padding: 2px;
  border-radius: 12px;
  background: linear-gradient(270deg, #7f00ff, #e100ff, #00f0ff, #7f00ff);
  background-size: 600% 600%;
  animation: borderAnimate 6s ease infinite;
  overflow: hidden;
  transition: transform 0.3s ease;
}

@keyframes borderAnimate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes flipIn {
  0% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
}

.flip-in {
  animation: flipIn 0.7s ease forwards;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
</style>
