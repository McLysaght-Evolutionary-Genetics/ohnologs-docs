import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // base: "/ohnologs/docs",
  //trailingSlash: "never",
  integrations: [
    starlight({
     
      title: 'Documentation', 
      social: {
      
        github: 'https://aoifolution.gen.tcd.ie/ohnologs/tree',
      },
      sidebar: [
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
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});


