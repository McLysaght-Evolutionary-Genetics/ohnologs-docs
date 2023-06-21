---
title: Synteny 
description: Get started building your docs site with Starlight.
---

### <u>Synteny </u>
Synteny can be defined as two or more genes being on the same chromosome in a particular species. Synteny can then be divided into micro-synteny and macro-synteny where micro-synteny is a type of synteny in which only a small number of genes are conserved and macro-synteny refers to the conservation of large blocks of genes. 

### <u> Using the Plot </u>

Synteny plots are a great way to visualise the conservation of genes among various genomes.

The following notes and features are very helpful to know when navigating the plot,

The synteny plot shows blocks of micro-synteny that match to homologous genes. Once selected, genes appear as coloured boxes and the conservation can be seen by following the horizontal line(s) that matches to other genes. Selecting genes on the plot will automatically update the table, located at the bottom of the page, with those genes. Similarily, selecting genes in the table will have them selected on the plot.

The names of species and chromosome number as seen on the plot:

<img src="/src/assets/synteny_species.jpg"
width="100"
height="350" />

Conservation seen when the gene 'ENSG00000141664' is selected from the table:
<img src="/src/assets/synteny_conservation.jpg">

Species name and chromosome number of each chromosome on the plot are labelled towards the left hand side and the plot itself can be resized by scrolling. You can also move the plot by dragging it around your screen.

Selecting 's' on your keyboard opens the selection mode on the plot where you can drag the cursor to select and highlight many genes across multiple chromosomes. As well as this, hovering over a particular gene opens a small menu which lists chromosome, species, gene, protein and location. It also includes the source of the gene through a link to Ensembl, an external genome database available to further research your chosen gene, this is further explained in the 'Ensembl and Internal Links' heading below.

Example of highlighting multiple genes using selection mode:

<img src="/src/assets/synteny_selection.png"
width="450"
height="300" />

The menu seen when a gene is hovered over:

<img src="/src/assets/synteny_menu.jpg"
width="300"
height="200" />


### <u> Using the Table </u> 

On this part of the synteny page you are able to select various genes/proteins from the table and they will appear in the synteny plot.

<u>The table's headings are listed as follows:</u>

| Gene | Protein | Species | Source | Chromosome | Segment | Labels |

The points below explain what each header refers to, 

<ul>
<li><b>Gene:</b> Name of the gene</li>
<li><b>Protein:</b> Name of the protein</li>
<li><b>Species:</b> Name of the species</li>
<li><b>Source:</b> Where the data in the table came from. The possible sources are Ensembl, RefSeq or other</li>
<li><b>Chromosome:</b> Which chromosome a particular gene is located on </li>
<li><b>Segment:</b>How many segments are there in the genome </li>
<li><b>Labels:</b> Evidence-based. They will either be micro-synteny, macro-synteny or gene phylogeny</li>
</ul>
<br>

Note that selections made from other parts of the website will persist and appear in both table and the plot which is useful if you have already made many specific selections. However, if this is something you wish to avoid, refreshing the page removes any previously made selections across the website.

You can download any of the data found on the website. To do this go to the section of the website that has the data you would be looking for, genes/genomes/proteins, and use the selction boxes to refine your search. Once the table has been updated there will be a 'Download' button on the right hand side of the table. Note that if you have previosuly made any selections they will persist across both pages and become selected in the tables. If you wish to avoid this click the 'Cancel' button found on the top right of the table.

Look for this button on the tables if you wish to download any data from our site:
<img src="/src/assets/download.jpg">

### <u> Ensembl and Internal Links </u>

Ensembl is a genome database, this was included in the site so that users can find more in-depth information relating to a certain gene of interest. There are also external links on the website under the 'Source' heading of the tables, these lead to external databases and from there you can search for other genes or genome sequences. 


External link for the Ensembl database:
<img src="/src/assets/source.jpg">

In addition to this, there are two internal links in the table under the 'Protein' heading. These links will lead you to the 'Phylogeny' and 'Synteny' pages within our website. The blue icon on the left will lead you to the phylogeny page and the blue icon on the right will lead you to the synteny page. If you have previosuly made any selections they will persist across both pages and become selected in the tables which means you do not have to manually make the same selections again. However, if you wish to avoid this click the 'Cancel' button found on the top right of the table.

Internal link for the <b>Phylogeny</b> section:
<img src="/src/assets/internal_tree.png">


Internal link for the <b>Synteny</b> section:
<img src="/src/assets/internal_synteny.png">



