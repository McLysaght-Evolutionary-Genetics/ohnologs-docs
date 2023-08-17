---
title: Synteny 
description: Get started building your docs site with Starlight.
---

### <u>Synteny </u>
Synteny can be defined as certain genes of a species being on the same chromosome. Synteny can then be further divided into micro-synteny and macro-synteny where micro-synteny is a type of synteny in which there is conservation of gene order across different sections of the genome and macro-synteny is the conservation of gene content across different sections of the genome.

### <u> Creating a Plot </u>

Synteny plots are a great way to visualise the conservation of genes among various genomes and you can create your own with your favourite genes using the synteny page.

When you initially open this page you will only see a search box for genes/proteins. To create a synteny plot first go to the 'Genes' page on our website and find the relevant genes by utilisng the available drop-menus and then select them on the table. Next, click into the internal synteny link located under the protein name in the same row as your gene, this will automatically add all of the genes you selected from the table into your plot. After that go back to the synteny page to view your synteny plot. 

The internal synteny link,
<img src="/src/assets/synteny.jpg">

Further information on how to navigate the 'Genes' page can be found [here](http://localhost:3000/guides/cgene-guide/#-using-the-table). Your plot will consist of labels, grey boxes, horizontal lines and faint lines in the background that become more visible if you enlarge the plot by scrolling onto it. The labels refer to the species and chromosomes of an organism, the grey boxes represent various genes, the horizontal lines are chromosomes and the faint lines are the relationships between various genes.

What you will see once you create your own plot, note the labelling of species and chromosomes (lhs):

<img src="/src/assets/synteny_main.jpg">


You will want to go through the plot and select the genes you are interested in by hovering over them and clicking into them. Doing this will now display your gene as a coloured box and a line will link it to another gene on your plot which represents synteny. If you have clicked a wrong gene click into it again to unselect it. Selecting genes on the plot will automatically update the table, located at the bottom of the page, with those genes. Similarily, selecting genes in the table will have them selected on the plot.

Here is an example of conservation seen when the gene 'ENSG00000141664' is selected from the table:
<img src="/src/assets/synteny_conservation.jpg">

### <u> Navigating the Plot </u>

Once you have created your plot it may be helpful to be aware of the following features available to you when navigating.

You are able to resize the synteny plot by using the scroll wheel on your mouse whilst your cursor is hovering over the plot. To move around you can drag your cursor around the plot. Selecting 's' on your keyboard opens the selection mode on the plot where you can drag the cursor to select and highlight many genes across multiple chromosomes. You can cancel the selection mode by hitting the escape key. 


As well as this, hovering over a particular gene opens a small menu which lists chromosome, species, gene, protein and location. It also includes the source of the gene through a link to Ensembl, an external genome database available to further research your chosen gene, this is further explained in the [Ensembl and Internal Links](http://localhost:3000/guides/hsynteny/#-ensembl-and-internal-links) heading below.

Example of highlighting multiple genes using selection mode:

<img src="/src/assets/synteny_selection.png"
width="450"
height="300" />

This is an example of a menu seen when a gene is hovered over:

<img src="/src/assets/synteny_menu.jpg"
width="300"
height="200" />

##### Data table

All genes belonging to the synteny block will be shown in a table below the synteny plot. The table displayed on this page follows our standard layout, you can read more about it here (link).

##### Data download

All gene data used for generating the current plot can be downloaded by pressing the download button above the table. If you want to download a subset of the data, you can read more about selecting table entries here (link).

:::caution

Unlike other tables, this download only plot data

:::

##### Linking

You can view more information about a gene by clicking on any of the entries listed under the 'source' table column.

You can also jump to the gene tree or synteny data visualisations containing a particular gene entry by clicking the appropriate buttons in the protein column. Read more about data linking (here).
