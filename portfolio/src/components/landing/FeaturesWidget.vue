<script setup>
import { ref, onMounted } from "vue";

const videoList = [
    "/demo/video/Night.mp4",
    "/demo/video/Night.mp4",
    "/demo/video/Night.mp4",
];

const videoRefs = ref([]);
const visibleCards = ref(Array(videoList.length).fill(false));

function pauseOtherVideos(currentIndex) {
    videoRefs.value.forEach((video, index) => {
        if (index !== currentIndex && video && !video.paused) {
            video.pause();
        }
    });
}

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
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const index = Number(entry.target.getAttribute("data-index"));
                if (entry.isIntersecting) {
                    visibleCards.value[index] = true;
                }
            });
        },
        { threshold: 0.1 },
    );

    document.querySelectorAll(".fade-up-card").forEach((el) => {
        observer.observe(el);
    });
});
</script>

<template>
    <div
        id="features"
        class="py-6 px-4 md:px-8 lg:px-20"
        style="position: relative; bottom: 200px"
    >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Section Title -->
            <div class="col-span-full text-center mb-6">
                <div
                    class="text-surface-900 dark:text-surface-0 font-semibold mb-2 text-4xl"
                >
                    Marvelous Highlights
                </div>
                <span class="text-muted-color text-2xl">Enjoy Watching...</span>
            </div>

            <!-- Video Cards -->
            <div
                v-for="(videoSrc, index) in videoList"
                :key="index"
                class="p-[2px] rounded-xl transition-transform duration-300 transform hover:scale-105 fade-up-card"
                :style="`${gradientStyle}; transition: all 0.8s ease-out ${index * 300}ms`"
                :data-index="index"
                :class="{
                    'opacity-0 translate-y-8': !visibleCards[index],
                    'opacity-100 translate-y-0': visibleCards[index],
                }"
            >
                <div
                    class="p-4 bg-surface-0 dark:bg-surface-900 rounded-xl overflow-hidden shadow-md group"
                >
                    <div
                        class="relative aspect-video rounded-lg overflow-hidden"
                    >
                        <video
                            :ref="(el) => (videoRefs[index] = el)"
                            :src="videoSrc"
                            controls
                            playsinline
                            class="w-full h-full object-cover"
                            :poster="videoSrc"
                            @play="pauseOtherVideos(index)"
                        ></video>
                    </div>

                    <div class="mt-4">
                        <h5
                            class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold"
                        >
                            Easy to Use
                        </h5>
                        <span class="text-surface-600 dark:text-surface-200">
                            Posuere morbi leo urna molestie.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
