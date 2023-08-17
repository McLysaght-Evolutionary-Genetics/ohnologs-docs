---
title: Selection 
description: Get started building your docs site with Starlight.
---

### Database search

Our website provides a way to search our database using a pre-existing list of gene and protein identifiers. This can be useful if you already know which genes you want to analyse.

### Search input

Gene lists can be provided in multiple formats, we support the following:

- FASTA files
- TSV/CSV files
- TXT files

:::note

Any non identifier content will be ignored. As long as theres a clear structure and your sep is either a , or \t, it should generally work

:::

In order to search our database, you can either upload the desired gene list, or paste it into the provided text area. Uploading files can be done in two ways: You can drag the desired file onto the upload area, or alternatively, you can click on the upload area which will open your system's native file picker.

Once the gene list has either been uploaded or pasted, the search will begin automatically and any results will be displayed in a table below the input fields.

(include image)

##### Data table

The gene table displayed on this page follows our standard layout, you can read more about it here (link).

##### Data download

All gene data returned from the database search can be downloaded by pressing the download button above the table. If you want to download a subset of the data, you can read more about selecting table entries here (link).

:::caution

Unlike other tables, this download only downloads the search

:::

##### Linking

You can view more information about a gene by clicking on any of the entries listed under the 'source' table column.

You can also jump to the gene tree or synteny data visualisations containing a particular gene entry by clicking the appropriate buttons in the protein column. Read more about data linking (here).
