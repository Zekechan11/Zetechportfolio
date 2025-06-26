<script setup>
function smoothScroll(id) {
    document.body.click();
    document.querySelector(id).scrollIntoView({
        behavior: "smooth",
    });
}
</script>

<template>
    <div
        class="navbar py-0 px-6 mx-0 md:mx-12 lg:mx-0 lg:px-10 flex items-center justify-between fixed top-0 left-0 w-full z-20 shadow-lg"
        style="
            color: darkblue;
            background-color: #f0f8ff;
            font-weight: bold;
            color: white;
        "
    >
        <a class="flex items-center gap-3" href="#">
            <img
                src="/demo/img/favicon.ico"
                alt="ZETECH Logo"
                class="w-16 h-16 object-contain"
            />
            <span class="text-2xl font-bold text-[#065940]">ZETECH</span>
        </a>

        <Button
            class="lg:!hidden"
            text
            severity="secondary"
            rounded
            v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-fadeout',
                hideOnOutsideClick: true,
            }"
        >
            <i class="pi pi-bars !text-2xl"></i>
        </Button>
        <div
            class="items-center bg-surface-0 dark:bg-surface-900 grow justify-center hidden lg:flex absolute lg:static w-full left-0 top-full px-12 py-8 lg:px-0 z-20"
            style="background-color: #f0f8ff"
        >
            <ul
                class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-10 mx-auto"
            >
                <li>
                    <a
                        @click="smoothScroll('#hero')"
                        class="menu-item font-semibold"
                    >
                        <button text>Home</button>
                    </a>
                </li>
                <li>
                    <a
                        @click="smoothScroll('#features')"
                        class="menu-item font-semibold"
                    >
                        <button text>Highlights</button>
                    </a>
                </li>
                <li>
                    <a
                        @click="smoothScroll('#tools')"
                        class="menu-item font-semibold"
                    >
                        <button text>Tools</button>
                    </a>
                </li>

                <li>
                    <a
                        @click="smoothScroll('#about')"
                        class="menu-item font-semibold"
                    >
                        <button text>About</button>
                    </a>
                </li>
                <li>
                    <a
                        @click="smoothScroll('#contacts')"
                        class="menu-item font-semibold"
                    >
                        <button text>Contacts</button>
                    </a>
                </li>
            </ul>
            <div
                class="flex items-center gap-2 border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0"
            >
                <!-- Facebook Button with Tooltip -->
                <a
                    href="https://www.facebook.com/ezekielangelo.pelayo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        icon="pi pi-facebook"
                        style="background-color: #0866ff; border: #065940"
                        class="hover:!bg-blue-700 hover:!border-blue-300 transform transition-transform duration-200 hover:scale-110"
                        v-tooltip.bottom="{
                            value: 'Facebook',
                            pt: {
                                arrow: {
                                    style: {
                                        borderBottomColor:
                                            'var(--p-primary-color)',
                                    },
                                },
                                text: '!bg-blue-500 !text-primary-contrast !font-medium',
                            },
                        }"
                    />
                </a>

                <!-- GitHub Button with Tooltip -->
                <a
                    href="https://github.com/Zekechan11"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        icon="pi pi-github"
                        @click="visible = true"
                        style="background-color: #1c2833; border: #065940"
                        class="hover:!bg-neutral-700 hover:!border-neutral-200 transform transition-transform duration-200 hover:scale-110"
                        v-tooltip.bottom="{
                            value: 'GitHub',
                            pt: {
                                arrow: {
                                    style: {
                                        borderBottomColor:
                                            'var(--p-primary-color)',
                                    },
                                },
                                text: '!bg-secondary !text-primary-contrast !font-medium',
                            },
                        }"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.custom-scrolltop {
    transition: background-color 0.3s ease;
}

.custom-scrolltop:hover {
    background-color: info !important;
    /* Use !important if needed */
}

.menu-item {
    color: #065940;
    text-decoration: none;
    /* Remove underline */
    position: relative;
    /* For the hover effect */
}

.menu-item:hover {
    text-decoration: none;
    /* Keep it clean */
}

.menu-item::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    /* Adjust as needed */
    height: 2px;
    /* Thickness of the underline */
    background-color: #065940;
    /* Color of the underline */
    transform: scaleX(0);
    /* Initially hide the underline */
    transition: transform 0.3s ease;
    /* Animation */
}

.menu-item:hover::after {
    transform: scaleX(1);
    /* Show underline on hover */
}
</style>
