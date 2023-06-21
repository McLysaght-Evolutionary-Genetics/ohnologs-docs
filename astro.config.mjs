import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // base: "/ohnologs/docs",
  //trailingSlash: "never",
  integrations: [
    starlight({
     
     
      title:'Home',
    
      sidebar: [
        {label: 'Navigation',
        items: [
          // Each item here is one entry in the navigation menu.
          { label: 'Back to Database', link: 'https://aoifolution.gen.tcd.ie/ohnologs' },
        ],
      },
        {
          label: 'Notes',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Special Notes', link: '/' },
          ],
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
      ],
    }),
  ],
});
