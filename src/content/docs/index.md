---
title: Ohnologs database
---

### Introduction

There is a general lack of easily accessible, high-quality ohnolog databases - while several datasets exist, they are either badly documented, or lack (in our opinion) crucial data filtering and visualisation features. We aim to offer a service that attempts to address all the shortcomings of current alternatives:

- **Multiple sources of evidence** (macro-synteny, micro-synteny, and gene trees) are used to classify genes are ohnologs
- We **distinguish between 1R and 2R** duplicate pairs
- We offer **multiple ways to filter and select** genes from our dataset
- Users can **browse our data** before downloading using our online interface
- We offer multiple ways to **visualise and analyse genes** in our dataset
- Our process is **well documented, freely available, and reproducable**

### Features

The features available on our website are summarised below. Each feature is documented more thoroughly on its dedicated docs page.

###### Download our data

If you want to download our entire dataset, click here . Alternatively, you can choose what data to download by browsing to one of the following pages:

- Species page - [docs](../species) | [website](https://aoifolution.gen.tcd.ie/ohnologs/species)
- Gene page - [docs](../gene) | [website](https://aoifolution.gen.tcd.ie/ohnologs/gene)

###### Search our data

If you already have some genes of interest and want to search our database with those in mind, you can do so by browsing to one of the following pages:

- Selection page - [docs](../select) | [website](https://aoifolution.gen.tcd.ie/ohnologs/select)
- BLAST page - [docs](../blast) | [website](https://aoifolution.gen.tcd.ie/ohnologs/blast)

###### Visualise our data

If you want to visualise the data that you have selected, be that single genes or entire genomes, you can generate figures in real time on the following pages:

- Circos page - [docs](../circos) | [website](https://aoifolution.gen.tcd.ie/ohnologs/circos)
- Dotplot page - [docs](../dotplot) | [website](https://aoifolution.gen.tcd.ie/ohnologs/dotplot)
- Phylogeny page - [docs](../tree) | [website](https://aoifolution.gen.tcd.ie/ohnologs/tree)
- Microsynteny page - [docs](../synteny) | [website](https://aoifolution.gen.tcd.ie/ohnologs/synteny)

### Use cases

The tools provided on our website can be useful for data-exploration and simple analyses. Below is a (far from exhaustive) list of problems that our website aims to solve:

##### I have a favourite gene

You can visit the [BLAST](https://aoifolution.gen.tcd.ie/ohnologs/blast) page to find homologs of your favourite gene that are present in our database. The resulting genes can either be downloaded or selected. Any genes that are currently in your selection will be highlighted across all plots on our website.

##### I'm interested in a specific gene family

You can visit the [selection](https://aoifolution.gen.tcd.ie/ohnologs/select) page and provide a FASTA or TSV file to find any matching genes that are present in our database. The results can either be downloaded or selected. Any genes that are currently in your selection will be highlighted across all plots on our website.

##### I like pretty graphs

You're in luck! You can visit any of the [circos](https://aoifolution.gen.tcd.ie/ohnologs/circos), [dotplot](https://aoifolution.gen.tcd.ie/ohnologs/dotplot), [tree](https://aoifolution.gen.tcd.ie/ohnologs/tree), or [synteny](https://aoifolution.gen.tcd.ie/ohnologs/synteny) pages and (hopefully) enjoy what you see ;). If you're still not satisfied, let us know what we can do to satiate your immeasurable hunger for pretty graphs.

##### I'm confused

TODO - rewrite cos youre already in the right place!

We have a thing for that too! You can read our comprehensive [documentation](https://aoifolution.gen.tcd.ie/ohnologs) to learn all about our features. If you don't feel like reading, visit a [random page](...) and go exploring. That'll work too... probably.

### Our data

The genes in our database are displayed in various forms on our website. Below is a summary of the various ways that users can see and interact with our data.

##### Tables

Most of the pages on our website contain data tables towards the bottom of each page. These tables display all the genes in our database that match your selected filters, or in the case of figures, the table displays all of the genes that appear in a figure.

Most tables contain the following information for each gene:

- **Gene:** The gene identifier
- **Protein:** The protein identifier
- **Species:** The species whose genome this gene belongs to
- **Source:** The database from which the genome was sourced
- **Chromosome:** The chromosome that the gene appears on 
- **Segment:** The macro-synteny segment that the gene appears on (see ...)
- **Labels:** The evidence that suggests that this gene is an ohnolog

##### Data download

The data on the website is completely accessible to the public, and can be easily downloaded. To download our entire dataset, you can click the 'downlaod' link at the top of each table (sepcies vs genes) or visit (this special link).

Note that if there are any genes currently in your selection (see filtering and selection below), only a subset of the dataset will be downloaded. Pressing the 'cancel' button will clear your current selection.

(inset image here)

NOTE: document the download format

##### Linking

On our website there are external links within our website that can help you to find more in-depth information regarding the genes that you are interested in. These links can be found under the 'Source' heading of the tables, towards the bottom of the pages, lead to external databases such as Ensembl which is a genome database.

In addition to this, there are two internal links in the table under the 'Protein' heading. These links will lead you to the 'Phylogeny' and 'Synteny' pages within our website. The blue icon on the left will lead you to the phylogeny page and the blue icon on the right will lead you to the synteny page. If you have previosuly made any selections they will persist across both pages and become selected in the tables which means you do not have to manually make the same selections again. However, if this is something that you wish to avoid this click the 'Cancel' button found on the top right of the table.

(inset image here)

##### Filtering and selection

(try to distinguish between filtering and selection in a clear manner)

In order to download a filtered subset of our database, use the filters (gene, species, vis pages) to narrow down the genes that you are interested in.

- This can be done on the species/genes pages using filters (link to relevant docs)
- Or the selection/blast pages (if you have a protein seq/list of genes)
- Or on the data vis pages (interacting with pretty graphs)

One of the tools available on the website is Global Selection. This means that when a gene is selected anywhere on our website, either through a table, or graphically, it will continue to be added to your other selections , again, such as tables or plots. This selection persists across pages and this may affect any plots, searches or data you wish to download. If you wish to avoid this, it is important to ensure that no genes are still selected in the table beforehand. You can easily do this by clicking the 'Cancel' button which can be found at the top right of every table.

(inset image here)

##### Visualisation

The final way that our data is displayed (and can be interacted with) is through multiple figures generated in real time on our website. These include (links to relevant docs pages).

Each figure interacts with the global selection (visual display, adding/removing genes) - mention the general mechanics, more details can be found on the individual docs pages.

Maybe a list of what each figure may be useful for.

### Useful terms

Below are some key definitons that are useful to know when navigating the website,

- **Whole Genome Duplication (WGD):**  An event in which an extra copy, or copies in some cases, of the genome of an organism is made
- **Ohnologs:**      Genes that arise from WGD events
- **Synteny:**       Certain genes being on the same chromosome in a species
- **Microsynteny:**  a type of synteny in which there is conservation of gene order across different sections of the genome
- **Macrosynteny:**  the conservation of gene content across different sections of the genome.
- **Circos Plot**   A visual representation of genomic data
