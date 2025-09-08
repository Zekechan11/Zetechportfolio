<script setup>
import { ref, onMounted } from "vue";

// Reactive state to trigger animation
const showAbout = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                showAbout.value = true;
            }
        },
        { threshold: 0.1 },
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);
});
</script>

<template>
    <div id="about" class="py-16 px-6 lg:px-20 mx-0 lg:mx-20" :class="{
        'opacity-0 rotate-y-90': !showAbout,
        'opacity-100 rotate-y-0': showAbout,
    }" style="transform-style: preserve-3d; transition: all 0.8s ease">
        <div class="grid grid-cols-12 gap-4 justify-center">
            <div class="col-span-12 mt-10 mb-20 p-8 md:p-20 rounded-3xl shadow-xl" style="
                    background: linear-gradient(
                            0deg,
                            rgba(255, 255, 255, 0.6),
                            rgba(255, 255, 255, 0.6)
                        ),
                        radial-gradient(
                            100% 180% at 80% 50%,
                            #fdf7b2 0%,
                            #c3dcfa 100%
                        );
                ">
                <div class="text-left flex flex-col justify-center items-center">
                    <h2 class="text-gray-900 text-4xl font-extrabold mb-3">
                        I'm Ezekiel Angelo C. Pelayo
                    </h2>
                    <p class="text-lg text-gray-600 font-medium mb-2">
                        You can call me Zeke — a passionate creator driven by
                        visuals and code.
                    </p>
                    <p class="text-gray-800 text-2xl leading-relaxed mt-6 max-w-3xl">
                        I’m a
                        <span class="font-semibold">Video Editor</span> who
                        brings stories to life, a
                        <span class="font-semibold">Programmer</span> who builds
                        interactive experiences, and a
                        <span class="font-semibold">UI Designer</span> who
                        shapes visual identities. During my OJT at
                        <span class="font-semibold">Lifewood Data Technology</span>,
                        I gained real-world experience in handling data and
                        contributing to tech-driven solutions. Whether I'm working with
                        motion, logic, or branding, my goal is simple: create
                        meaningful and impactful digital arts.
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.rotate-y-90 {
    transform: rotateY(-90deg);
}

.rotate-y-0 {
    transform: rotateY(0deg);
}
</style>
