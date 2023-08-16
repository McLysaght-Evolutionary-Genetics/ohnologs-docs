---
title: Gene 
description: Get started building your docs site with Starlight.
---

### Gene viewer

Our website provides an interface for easily viewing and filtering all the genes in our database.

(link)

##### Filtering

Our filtering feature allows users to narrow down the dataset to their liking without needing to download it first. Gene data can be filtered by multiple attributes:

- species: the species whose genome a gene is part of
- chromosome: the chromosome a gene is part of
- segment: the macro-synteny segment the gene is part of (see link)

NOTE: a species must be selected for chromosome > segment selection to become available

- source: the genome database where information for a gene was sourced

- labels: the evidence that suggests a gene is an ohnolog

The strict toggle defined whether the labels list should be treated as a subset (off) or superset (on):

- subset: a gene entry must match at least 1 label from the list
- superset: a gene entry must match all labels from the list

(include image?)

##### Data table

The gene table displayed on this page follows our standard layout, you can read more about it here (link).

##### Data download

All gene data can be downloaded by pressing the download button above the table. If you want to download a subset of the data, you can read more about selecting table entries here (link).

##### Linking

You can view more information about a gene by clicking on any of the entries listed under the 'source' table column.

You can also jump to the gene tree or synteny data visualisations containing a particular gene entry by clicking the appropriate buttons in the protein column. Read more about data linking (here).
