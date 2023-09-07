import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Ohnologs docs",
      sidebar: [
        {
          label: "Navigation",
          items: [
            {
              label: "Return to database",
              link: "https://ohnologs.com",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Introduction",
              link: "/",
            },
            {
              label: "Species browser",
              link: "/guides/species",
            },
            {
              label: "Gene browser",
              link: "/guides/genes",
            },
            {
              label: "Database search",
              link: "/guides/selection",
            },
            {
              label: "BLAST search",
              link: "/guides/blast",
            },
            {
              label: "Circos plots",
              link: "/guides/circos",
            },
            {
              label: "Dotplots",
              link: "/guides/dotplot",
            },
            {
              label: "Gene phylogenies",
              link: "/guides/tree",
            },
            {
              label: "Synteny plots",
              link: "/guides/synteny",
            },
          ],
          autogenerate: { directory: "guides" },
        },
      ],
    }),
  ],
});
