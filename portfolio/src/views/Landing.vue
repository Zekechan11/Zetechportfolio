<script setup lang="ts">
import FeaturesWidget from "@/components/landing/ProjectsWidget.vue";
import FooterWidget from "@/components/landing/FooterWidget.vue";
import HeroWidget from "@/components/landing/HeroWidget.vue";
import HighlightsWidget from "@/components/landing/ToolsWidget.vue";
import PricingWidget from "@/components/landing/AboutWidget.vue";
import TopbarWidget from "@/components/landing/TopbarWidget.vue";
import ToolsWidget from "../components/landing/ToolsWidget.vue";
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div
                class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static"
            >
                <TopbarWidget />
            </div>
            <HeroWidget />
            <ProjectsWidget />
            <ToolsWidget />
            <AboutWidget />
            <FooterWidget />
        </div>
    </div>
</template>
