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
    if (index <= fullText.length) {
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 1500); // pause before deleting
    }
  } else {
    displayText.value = fullText.substring(0, index - 1);
    index--;
    if (index >= 0) {
      setTimeout(typeWriter, 50);
    } else {
      isDeleting = false;
      setTimeout(typeWriter, 1000); // pause before retyping
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
    class="flex flex-col pt-12 px-4 sm:px-6 lg:px-20 overflow-hidden relative min-h-[80vh]"
    style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
           radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%);
           clip-path: ellipse(120% 76% at 93% 10%)"
  >
    <!-- TEXT SECTION -->
    <div class="mx-4 sm:mx-8 md:mx-20 mt-12 md:mt-20 z-10 max-w-3xl">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
        <span class="font-light block">HEY HEY HEY</span>
        <span >{{ displayText }}</span><span class="blink">|</span>
      </h1>
      <p class="font-normal text-lg sm:text-xl md:text-2xl leading-relaxed md:mt-4 text-gray-700">
        Editor, Programmer, UI Designer
      </p>
      <Button
        label="Subscribe"
        as="router-link"
        to="/"
        rounded
        class="!text-lg sm:!text-xl mt-6 sm:mt-8 !px-4"
      />
    </div>

    <!-- IMAGE SECTION -->
    <div
      class="absolute bottom-0 right-0 sm:relative sm:mt-12 z-0 
             sm:ml-auto sm:translate-x-8 md:translate-x-16 lg:translate-x-24 xl:translate-x-32 
             translate-y-[-65px] sm:-translate-y-12 md:-translate-y-20 lg:-translate-y-28 xl:-translate-y-36
             w-full flex justify-end"
    >
      <img
        src="/demo/img/profile.png"
        alt="Hero Image"
        class="w-[85%] sm:w-[360px] md:w-[520px] lg:w-[700px] xl:w-[800px] max-w-none object-contain"
      />
    </div>
  </div>
</template>

<style scoped>
.blink {
  animation: blink-animation 1s steps(2, start) infinite;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>

