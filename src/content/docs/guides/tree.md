---
title: Gene phylogenies
---

### Introduction

Our website provides dynamically-generated gene trees. Gene trees are useful for visualising the evolutionary history of a gene and all of its homologs. Given that whole genome duplications create additional copies of every gene in the genome, we expect to see bifurcations in any given WGD tree where genes on either side of this node are ohnologous.

### Tree settings

In order to display a gene tree, you must first select which tree/orthogroup you wish to plot. This can be done by entering a gene or protein identifier into the provided textbox and pressing the search button. This will match the identifier against our database and attempt to find the gene tree that it belongs to.

![tree settings](../../../assets/tree-settings.png)

Selecting the query tree/orthogroup will generate a gene tree and display a table containing every gene present in the tree.

### Reading the tree

The tree shows the evolutionary history of all genes in the selected orthogroup. Each tree is rooted on amphioxus genes. Each bifurcating node represents a gene duplication event. Whole genome duplication nodes are highlighten in red. Leaf nodes are labelled with the species and protein identifier.

![tree demo](../../../assets/tree-demo.png)

:::note

Branch lengths represent evolutionary time.

:::

### Data table

All genes belonging to the query tree/orthogroup will be shown in a table below the tree. The table displayed on this page follows our standard layout, you can read more about it [here](/#tables).

### Data download

All gene data used for generating the current plot can be downloaded by pressing the download button above the table. If you want to download a subset of the data, you can read more about selecting table entries [here](/#filtering-and-selection).

:::caution

Only genes displayed in the tree can be downloaded from this page.

:::

### Linking

You can view more information about a gene by clicking on any of the entries listed under the source table column.

You can also jump to the gene tree or synteny data visualisations containing any particular gene entry by clicking any of the links in the protein column. You can read more about data linking [here](/#linking).
