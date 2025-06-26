<script setup>
import { ref, onMounted } from "vue";

const fullText = "I'm Ezekiel Angelo C. Pelayo";
const displayText = ref("");
let index = 0;
let isDeleting = false;

function typeWriter() {
    if (!isDeleting) {
        displayText.value = fullText.substring(0, index + 1);
        index++;
        if (index < fullText.length) {
            setTimeout(typeWriter, 100);
        } else {
            isDeleting = true;
            setTimeout(typeWriter, 1500);
        }
    } else {
        if (index > 0) {
            index--;
            displayText.value = fullText.substring(0, index);
            setTimeout(typeWriter, 60);
        } else {
            isDeleting = false;
            setTimeout(typeWriter, 500);
        }
    }
}

onMounted(() => {
    typeWriter();
});
</script>

<template>
    <div
        id="hero"
        class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden relative"
        style="
            background: linear-gradient(
                    0deg,
                    rgba(255, 255, 255, 0.2),
                    rgba(255, 255, 255, 0.2)
                ),
                radial-gradient(
                    77.36% 256.97% at 77.36% 57.52%,
                    rgb(238, 239, 175) 0%,
                    rgb(195, 227, 250) 100%
                );
            clip-path: ellipse(140% 52% at 98% 19%);
        "
    >
        <!-- Text Section -->
        <div
            class="mx-6 md:mx-20 mt-8 md:mt-16 relative z-10"
            style="top: 60px"
        >
            <h1 class="text-6xl font-bold text-gray-900 leading-tight">
                <span class="font-light block">HEYHEYHEY</span>
                <!-- Typing Text -->
                <span
                    class="block whitespace-nowrap relative h-[4.5rem] md:h-[5rem]"
                >
                    <span class="absolute top-0 left-0">{{ displayText }}</span>
                    <span class="invisible absolute top-0 left-0">{{
                        fullText
                    }}</span>
                </span>
            </h1>

            <p
                class="font-normal text-2xl leading-normal md:mt-4 text-gray-700"
            >
                Editor, Programmer, User Interface Designer
            </p>
        </div>

        <!-- Responsive Image Section -->
        <div class="flex justify-end mt-8 -mt-10 md:-mt-16 z-10">
            <img
                src="/demo/img/profile.png"
                alt="Hero Image"
                class="w-full object-contain floating-icon"
                style="
                    position: relative;
                    left: 80px;
                    height: 820px;
                    width: 820px;
                    bottom: 120px;
                    animation-delay: 3s;
                "
            />
        </div>
    </div>
</template>

<style scoped>
@keyframes floatIcon {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0.2;
    }

    50% {
        transform: translateY(-10px) scale(1.05);
        opacity: 1;
    }

    100% {
        transform: translateY(0) scale(1);
        opacity: 0.2;
    }
}

.floating-icon {
    animation: floatIcon 4s ease-in-out infinite;
}
</style>
