import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown'; // Add this line

// https://astro.build/config
export default defineConfig({
    site: 'https://pedrodelima.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        }),
        partytown({
            // Adds dataLayer.push as a forwarding event
            config: {
                forward: ["dataLayer.push"],
            },
        })
    ]
});
