<script setup>
import { ref, onMounted } from "vue";

const visibleCard1 = ref(false);
const visibleCard2 = ref(false);
const visibleCard3 = ref(false);

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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = entry.target.getAttribute("data-index");
      if (entry.isIntersecting) {
        if (index === "1") visibleCard1.value = true;
        if (index === "2") visibleCard2.value = true;
        if (index === "3") visibleCard3.value = true;
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-up-card").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <div id="features" class="py-6 px-4 md:px-8 lg:px-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Section Title -->
      <div class="col-span-full text-center mb-6">
        <div class="text-surface-900 dark:text-surface-0 font-semibold mb-2 text-4xl">
          Marvelous Highlights
        </div>
        <span class="text-muted-color text-2xl">Enjoy Watching...</span>
      </div>

      <!-- Card 1 -->
      <div
        class="p-[2px] rounded-xl transition-transform duration-100 transform hover:scale-105 fade-up-card"
        :style="`${gradientStyle}; transition: all 0.8s ease-out 0ms`"
        data-index="1"
        :class="{
          'opacity-0 translate-y-8': !visibleCard1,
          'opacity-100 translate-y-0': visibleCard1
        }"
      >
        <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl overflow-hidden shadow-md group">
          <div class="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ZAEZAez2WhA?si=rV4d8RRaJWK00GTD"
              class="w-full h-full rounded-lg"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div class="mt-4">
            <h5 class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold">
              Easy to Use
            </h5>
            <span class="text-surface-600 dark:text-surface-200">
              Posuere morbi leo urna molestie.
            </span>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="p-[2px] rounded-xl transition-transform duration-100 transform hover:scale-105 fade-up-card"
        :style="`${gradientStyle}; transition: all 0.8s ease-out 0ms`"
        data-index="2"
        :class="{
          'opacity-0 translate-y-8': !visibleCard2,
          'opacity-100 translate-y-0': visibleCard2
        }"
      >
        <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl overflow-hidden shadow-md group">
          <div class="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              class="w-full h-full rounded-lg"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div class="mt-4">
            <h5 class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold">
              Reliable Content
            </h5>
            <span class="text-surface-600 dark:text-surface-200">
              Viverra aliquet eget sit amet tellus.
            </span>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="p-[2px] rounded-xl transition-transform duration-100 transform hover:scale-105 fade-up-card"
        :style="`${gradientStyle}; transition: all 0.8s ease-out 0ms`"
        data-index="3"
        :class="{
          'opacity-0 translate-y-8': !visibleCard3,
          'opacity-100 translate-y-0': visibleCard3
        }"
      >
        <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl overflow-hidden shadow-md group">
          <div class="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/9bZkp7q19f0"
              class="w-full h-full rounded-lg"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div class="mt-4">
            <h5 class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold">
              Global Reach
            </h5>
            <span class="text-surface-600 dark:text-surface-200">
              Nunc non blandit massa enim nec dui.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
