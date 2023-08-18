---
title: Gene browser
---

### Introduction

Our website provides an interface for easily viewing and filtering all the genes in our database.

### Filtering

Our filtering feature allows users to narrow down the dataset to their liking without the need to download it first. Gene data can be filtered by multiple attributes:

- **Species:** The species that the gene belongs to.
- **Chromosome:** The chromosome that the gene belongs to.
- **Segment:** The macro-syntenic segment that the gene belongs to.
- **Source:** The genome database from which the information was sourced.
- **Labels:** The evidence that suggests a gene is an ohnolog.

:::note

You must first select a species, before you can filter by chromosome. Similarly, you must first select a chromosome before you can filter by segment.

:::

The strict toggle under labels defines whether this list should be treated as a subset (disabled) or superset (enabled):

- **Subset:** A gene entry must contain at least 1 label from the list to be included.
- **Superset:** A gene entry must contain all the labels from the list to be included.

### Data table

The gene table displayed on this page follows our standard layout, you can read more about it [here](/#tables).

### Data download

All gene data that passes the selected filters can be downloaded by pressing the download button above the table. If you want to download a subset of the data, you can read more about selecting table entries [here](/#filtering-and-selection).

### Linking

You can view more information about a gene by clicking on any of the entries listed under the 'source' table column.

You can also jump to the gene tree or synteny data visualisations containing any particular gene entry by clicking any of the links in the protein column. You can read more about data linking [here](/#linking).
