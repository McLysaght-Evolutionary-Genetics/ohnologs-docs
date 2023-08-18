---
title: Ohnologs database
---

### Introduction

There is a general lack of easily accessible, high-quality ohnolog databases - while several datasets exist, they are either badly documented, or lack (in our opinion) crucial data filtering and visualisation features. We aim to offer a service that attempts to address all the shortcomings of current alternatives:

- **Multiple sources of evidence** (macro-synteny, micro-synteny, and gene trees) are used to classify genes are ohnologs.
- We **distinguish between 1R and 2R** duplicate pairs.
- We offer **multiple ways to filter and select** genes from our dataset.
- Users can **browse our data** before downloading using our online interface.
- We offer multiple ways to **visualise and analyse** our dataset.
- Our pipeline is **well documented, freely available, and reproducible**.

### Features

The features available on our website are summarised below. Each feature is documented more thoroughly on its dedicated docs page.

###### Download our data

If you want to download our entire dataset, [click here](). Alternatively, you can choose what data to download by browsing to one of the following pages:

- Species page - [docs](/guides/species) | [website](https://aoifolution.gen.tcd.ie/ohnologs/species)
- Gene page - [docs](/guides/genes) | [website](https://aoifolution.gen.tcd.ie/ohnologs/gene)

###### Search our data

If you already have some genes of interest and want to search our database with those in mind, you can do so by browsing to one of the following pages:

- Selection page - [docs](/guides/select) | [website](https://aoifolution.gen.tcd.ie/ohnologs/select)
- BLAST page - [docs](/guides/blast) | [website](https://aoifolution.gen.tcd.ie/ohnologs/blast)

###### Visualise our data

If you want to visualise the data that you have selected, be that single genes or entire genomes, you can generate figures in real time on the following pages:

- Circos page - [docs](/guides/circos) | [website](https://aoifolution.gen.tcd.ie/ohnologs/circos)
- Dotplot page - [docs](/guides/dotplot) | [website](https://aoifolution.gen.tcd.ie/ohnologs/dotplot)
- Phylogeny page - [docs](/guides/tree) | [website](https://aoifolution.gen.tcd.ie/ohnologs/tree)
- Microsynteny page - [docs](/guides/synteny) | [website](https://aoifolution.gen.tcd.ie/ohnologs/synteny)

### Use cases

The tools provided on our website can be useful for data-exploration and simple analyses. Below is a (far from exhaustive) list of problems that our website can solve:

##### I have a favourite gene

You can visit the [BLAST](https://aoifolution.gen.tcd.ie/ohnologs/blast) page to find homologs of your favourite gene that are present in our database. The resulting genes can either be downloaded or selected. Any genes that are currently in your selection will be highlighted across all plots on our website.

##### I'm interested in a specific gene family

You can visit the [selection](https://aoifolution.gen.tcd.ie/ohnologs/select) page and provide a FASTA or TSV file to find any matching genes that are present in our database. The results can either be downloaded or selected. Any genes that are currently in your selection will be highlighted across all plots on our website.

##### I like pretty graphs

You're in luck! You can visit any of the [circos](https://aoifolution.gen.tcd.ie/ohnologs/circos), [dotplot](https://aoifolution.gen.tcd.ie/ohnologs/dotplot), [tree](https://aoifolution.gen.tcd.ie/ohnologs/tree), or [synteny](https://aoCaution

Only the genes returned by the database search can be downloaded from this page.ifolution.gen.tcd.ie/ohnologs/synteny) pages and (hopefully) enjoy what you see ;). If you're still not satisfied, let us know what we can do to satiate your immeasurable hunger for pretty graphs.

##### I'm confused

You're in the right place! We provide comprehensive documentation for each feature available on our website. If you don't feel like reading, visit a [random page](...) and go exploring. That'll work too... probably.

### Our data

The genes in our dataset are displayed using a combination of tables and figures. Below is a summary of the various ways that users can view and interact with our data.

##### Tables

Most of the pages on our website contain data tables which are located towards the bottom of each page. These tables display all the genes in our database that match your selected filters, or in the case of figures, the table displays all of the genes that appear in a figure.

![table demo](../../assets/table-demo.png)

Most tables contain the following information for each gene:

- **Gene:** The gene identifier.
- **Protein:** The protein identifier.
- **Species:** The species whose genome this gene belongs to.
- **Source:** The database from which the genome was sourced.
- **Chromosome:** The chromosome that the gene belongs to.
- **Segment:** The macro-synteny segment that the gene belongs to.
- **Labels:** The evidence that suggests that this gene is an ohnolog.

##### Data download

The data on the website is completely accessible to the public, and can be easily downloaded. To download all the data displayed in a table, you can click the download link located above the table entries.

Downloaded gene data will be provided in the TSV file format with the following columns:

- **TODO:** Document this!!!

Downloaded species data will be provided in the TSV file format with the following columns:

- **TODO:** Document this!!!

:::note

If any of the table entries are selected, pressing the download button will only download the selected entries. The selection can be cleared by pressing the cancel button located above the table.

:::

##### Linking

The tables on our website contain links to external databases that can help you to find more in-depth information regarding the genes that you are interested in. These links can be found under the source heading of tables, which are located towards the bottom of a page. These lead to gene extried in external databases such as Ensembl.

In addition to this, there are two internal links in each table under the protein heading. These links will lead you to the phylogeny and synteny pages within our website - a quick way to get more information about a gene that might interest you. When jumping to these pages, any selection you may have made on the current page will persist to the target page.

![link demo](../../assets/link-demo.png)

##### Filtering and selection

Our filtering utilities allow users to select a specific subset of our database based on certain criteria. These criteria can be gene attributes - such as the chromosome that a gene belongs to. Data filtering can be done on the [gene](/guides/genes) and [species](/guides/species) pages using dropdown menus to select data attributes that you wish to keep. Alternatively, data can be filtered to include only specific gene/protein identifiers or similar protein sequences using our [selection](/guides/selection) and [BLAST](/guides/blast) utilities respectively. Once filters have been applied on any page of our website, any data that passes these filters will be displayed in a table at the bottom of the page.

:::note

If any filters are applied, the download button above a table will only download the subset of our dataset that passes the applied filters.

:::

Our website allows users to select data displayed in tables - it is a form of manual filtering and curration. However, unlike filtering, your selection is global - it persists across all pages - and any genes currently in your selection are highlighted in all the figures generated by our website. Genes can be added to or removed from the selection using the toggles on the left side of a table.

![selection demo](../../assets/selection-demo.png)

You may find selection useful if:

- You are interested in a specific subset of genes.
- You have applied some filters, and want the filtered genes to be highlighted in figures.

:::note

If there are any genes currently in your selection, pressing the download button above a table will only download the genes in your selection. You can clear your selection by pressing the cancel button above the table.

:::

##### Visualisation

The final way that our data is displayed (and can be interacted with) is through multiple figures generated in real time on our website. These include [circos plots](/guides/circos), [dotplots](/guides/dotplot), [gene trees](/guides/tree), and [synteny plots](/guides/synteny). Each figure can iteract with the global gene selection:

- Genes that are selected will be highlighted in figures.
- There are multiple utilities that allow users to visually add/remove genes to/from the selection by interacting with each figure.

More details regarding the specifics of visual selection can be found on the individual documentation pages for each figure.

### Useful terms

Below are some key terms that are useful to know when navigating the website:

- **Whole genome duplication:** A major evolutionary event whereby all genomic material is doubled.
- **Ohnologs:** Duplicates arising as a result of a whole genome duplication event.
- **Micro-synteny:** Conservation of gene content and order.
- **Macro-synteny:** Conservation of gene content.
- **TODO:** document more shit!!!
