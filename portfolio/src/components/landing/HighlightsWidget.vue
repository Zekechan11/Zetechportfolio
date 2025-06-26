<script setup>
import { ref, onMounted } from "vue";

// Total number of cards (update this if you add more)
const cardCount = 6;
const visibleCards = ref(Array(cardCount).fill(false));

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

    document.querySelectorAll(".fade-right-card").forEach((el) => {
        observer.observe(el);
    });
});
</script>

<script>
const tools = [
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
        description:
            "Motion graphics and visual effects for next-level animation.",
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
</script>

<template>
    <div id="tools" class="py-6 px-6 lg:px-20 mx-0 lg:mx-20">
        <div
            class="grid grid-cols-12 gap-4 justify-center"
            style="position: relative; bottom: 100px"
        >
            <div class="col-span-12 text-center mt-20 mb-6">
                <div
                    class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl"
                >
                    My Editing Tools
                </div>
                <span class="text-muted-color text-2xl">
                    These are the apps I use to bring videos to life.
                </span>
            </div>

            <!-- Tool Cards -->
            <div
                v-for="(tool, index) in tools"
                :key="index"
                class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 fade-right-card"
                :data-index="index"
                :class="{
                    'opacity-0 translate-x-8': !visibleCards[index],
                    'opacity-100 translate-x-0': visibleCards[index],
                }"
                :style="`transition: all 0.8s ease ${index * 300}ms`"
            >
                <div
                    class="relative animated-border-wrapper transition-transform transform hover:scale-105 shadow-lg"
                >
                    <div
                        class="relative z-10 p-4 bg-surface-0 dark:bg-surface-900 h-full rounded-lg"
                    >
                        <div
                            class="flex items-center justify-center mb-4"
                            :class="tool.bgClass"
                            style="
                                width: 3.5rem;
                                height: 3.5rem;
                                border-radius: 10px;
                            "
                        >
                            <img
                                :src="tool.icon"
                                :alt="tool.title"
                                class="w-7 h-7 object-contain"
                            />
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">
                            {{ tool.title }}
                        </h5>
                        <span class="text-surface-600 dark:text-surface-200">
                            {{ tool.description }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
</style>
