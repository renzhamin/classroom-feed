import { sveltekit } from "@sveltejs/kit/vite"
import { SvelteKitPWA } from "@vite-pwa/sveltekit"
import { defineConfig } from "vite"
1
export default defineConfig({
    plugins: [
        sveltekit(),
        SvelteKitPWA({
            devOptions: {
                enabled: true,
            },
            manifest: {
                name: "Classroom Feed",
                short_name: "classroom-feed",
                description: "All your classroom announcements in one place",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "pwa-64x64.png",
                        sizes: "64x64",
                        type: "image/png",
                    },
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any",
                    },
                    {
                        src: "maskable-icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
            },
        }),
    ],
})
