<script setup>
import { ref } from "vue";

// Track which section is currently active
const activeSection = ref("hero");

function smoothScroll(id) {
    activeSection.value = id.replace("#", "");
    document.body.click();
    document.querySelector(id).scrollIntoView({
        behavior: "smooth",
    });
}

const showContactModal = ref(false);

function closeContactModal() {
    showContactModal.value = false;
}
</script>

<template>
    <div class="navbar py-0 px-6 mx-0 md:mx-12 lg:mx-0 lg:px-10 flex items-center justify-between fixed top-0 left-0 w-full z-20 shadow-lg"
        style="color: darkblue; background-color: #f0f8ff; font-weight: bold; color: white">
        <a class="flex items-center gap-3" href="#">
            <img src="/demo/img/favicon.ico" alt="ZETECH Logo" class="w-16 h-16 object-contain" />
            <span class="text-2xl font-bold text-[#065940]">ZETECH</span>
        </a>

        <!-- Mobile Menu Button -->
        <Button class="lg:!hidden" text severity="secondary" rounded v-styleclass="{
            selector: '@next',
            enterFromClass: 'hidden',
            enterActiveClass: 'animate-scalein',
            leaveToClass: 'hidden',
            leaveActiveClass: 'animate-fadeout',
            hideOnOutsideClick: true,
        }">
            <i class="pi pi-bars !text-2xl"></i>
        </Button>

        <!-- Navigation Menu -->
        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-center hidden lg:flex absolute lg:static w-full left-0 top-full px-12 py-8 lg:px-0 z-20"
            style="background-color: #f0f8ff">
            <ul
                class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-10 mx-auto">
                <li><a @click="smoothScroll('#hero')"
                        :class="['menu-item font-semibold', activeSection === 'hero' ? 'active' : '']"><button
                            text>Home</button></a></li>
                <li><a @click="smoothScroll('#features')"
                        :class="['menu-item font-semibold', activeSection === 'features' ? 'active' : '']"><button
                            text>Highlights</button></a></li>
                <li><a @click="smoothScroll('#tools')"
                        :class="['menu-item font-semibold', activeSection === 'tools' ? 'active' : '']"><button
                            text>Tools</button></a></li>
                <li><a @click="smoothScroll('#about')"
                        :class="['menu-item font-semibold', activeSection === 'about' ? 'active' : '']"><button
                            text>About</button></a></li>
                <li><a @click="showContactModal = true" class="menu-item font-semibold"><button
                            text>Contacts</button></a></li>
            </ul>

            <!-- Social Buttons -->
            <div class="flex items-center gap-2 border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0">
                <a href="https://www.facebook.com/ezekielangelo.pelayo" target="_blank">
                    <Button icon="pi pi-facebook" style="background-color: #0866ff; border: #065940"
                        class="hover:!bg-blue-700 hover:!border-blue-300 transform transition-transform duration-200 hover:scale-110"
                        v-tooltip.bottom="'Facebook'" />
                </a>
                <a href="https://github.com/Zekechan11" target="_blank">
                    <Button icon="pi pi-github" style="background-color: #1c2833; border: #065940"
                        class="hover:!bg-neutral-700 hover:!border-neutral-200 transform transition-transform duration-200 hover:scale-110"
                        v-tooltip.bottom="'GitHub'" />
                </a>
            </div>
        </div>
    </div>

    <!-- Contact Modal: Social Apps Only -->
    <div v-if="showContactModal"
        class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
        <div
            class="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-xl animate-fadeInUp transition-all duration-300">
            <!-- Close Button -->
            <button @click="closeContactModal"
                class="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl">✕</button>

            <!-- Title -->
            <h2 class="text-3xl font-bold text-center text-[#065940] mb-6">Let's Connect</h2>

            <!-- Subtitle -->
            <p class="text-center text-gray-700 mb-6">Reach out to me via socials below</p>

            <!-- Social Media Icons -->
            <div class="flex justify-center gap-6">
                <a href="mailto:pelayoezekiel96@gmail.com" target="_blank"
                    class="text-red-500 hover:text-red-700 text-3xl transition-transform hover:scale-125"
                    v-tooltip.bottom="'Gmail'">
                    <i class="pi pi-envelope"></i>
                </a>
                <a href="https://www.facebook.com/ezekielangelo.pelayo" target="_blank"
                    class="text-blue-600 hover:text-blue-800 text-3xl transition-transform hover:scale-125"
                    v-tooltip.bottom="'Facebook'"><i class="pi pi-facebook"></i></a>
                <a href="https://www.instagram.com/zeke_zetsu/?hl=en" target="_blank"
                    class="text-pink-500 hover:text-pink-700 text-3xl transition-transform hover:scale-125"
                    v-tooltip.bottom="'Instagram'"><i class="pi pi-instagram"></i></a>
                <a href="https://wa.me/+639673520009" target="_blank"
                    class="text-green-500 hover:text-green-700 text-3xl transition-transform hover:scale-125"
                    v-tooltip.bottom="'WhatsApp'"><i class="pi pi-whatsapp"></i></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu-item {
    color: #000000;
    text-decoration: none;
    position: relative;
}

.menu-item:hover::after,
.menu-item.active::after {
    transform: scaleX(1);
}

.menu-item::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 2px;
    background-color: #b7e06a;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

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
