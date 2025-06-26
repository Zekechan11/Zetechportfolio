
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            children: [
                {
                    path: "/",
                    name: "landing",
                    component: () => import("@/views/Landing.vue"),
                },
            ],
        },
    ],
});

export default router;
