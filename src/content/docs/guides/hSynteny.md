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

You are able to resize the synteny plot by using the scroll wheel on your mouse whilst your cursor is hovering over the plot. To move around you can drag your cursor around the plot. Selecting 's' on your keyboard opens the selection mode on the plot where you can drag the cursor to select and highlight many genes across multiple chromosomes. As well as this, hovering over a particular gene opens a small menu which lists chromosome, species, gene, protein and location. It also includes the source of the gene through a link to Ensembl, an external genome database available to further research your chosen gene, this is further explained in the [Ensembl and Internal Links](http://localhost:3000/guides/hsynteny/#-ensembl-and-internal-links) heading below.

Example of highlighting multiple genes using selection mode:

<img src="/src/assets/synteny_selection.png"
width="450"
height="300" />

This is an example of a menu seen when a gene is hovered over:

<img src="/src/assets/synteny_menu.jpg"
width="300"
height="200" />

### <u> Using the Table </u> 

When a synteny plot has been generated a table will be too. The table allows you to select various genes/proteins from the table to add them to you synteny plot. 

<u>The table's headings are as follows:</u>

<img src="/src/assets/synteny_table.jpg"
width="650"
height="170" />

The points below explain what each header refers to, 

<ul>
<li><b>1</b> Name of the gene</li>
<li><b>2</b> Name of the protein</li>
<li><b>3</b> Name of the species</li>
<li><b>4</b> Where the data in the table came from. The possible sources are Ensembl, RefSeq or other</li>
<li><b>5</b> Which chromosome a particular gene is located on </li>
<li><b>6</b> How many segments are there in the genome </li>
<li><b>7</b> Evidence-based. They will either be micro-synteny, macro-synteny or gene phylogeny</li>
<li><b>8</b> The button to use if you wish to download any data from the table</li>
</ul>
<br>

Note that selections made from other parts of the website will persist and appear in both table and the plot which is useful if you have already made many specific selections. However, if this is something you wish to avoid, clicking the blue 'cancel' button, located on the top right hand side of the table, removes any previously made selections from across the website.

You can download any of the data found on the website. To do this go to the section of the website that has the data you would be looking for, genes/genomes/proteins, and use the selction boxes to refine your search. Once the table has been updated there will be a 'Download' button on the right hand side of the table. Note that if you have previosuly made any selections they will persist across both pages and become selected in the tables. If you wish to avoid this click the 'Cancel' button found on the top right of the table.

Look for this button on the tables if you wish to download any data from our site:
<img src="/src/assets/download.jpg">

### <u> Ensembl and Internal Links </u>

There are external links within our website that can help you to find more in-depth information regarding the genes that you are interested in. These links can be found under the 'Source' heading of the tables, towards the bottom of the pages, lead to external databases such as Ensembl which is a genome database.

In addition to this, there are two internal links in the table under the 'Protein' heading. These links will lead you to the 'Phylogeny' and 'Synteny' pages within our website. The blue icon on the left will lead you to the phylogeny page and the blue icon on the right will lead you to the synteny page. If you have previosuly made any selections they will persist across both pages and become selected in the tables which means you do not have to manually make the same selections again. However, if this is something that you wish to avoid this click the 'Cancel' button found on the top right of the table.

<img src="/src/assets/synteny_table2.jpg">

<ul>
<li><b>1</b> Internal link to the phylogeny page</li>
<li><b>2</b> Internal link to the synteny page</li>
<li><b>3</b> Link to external database </li>
</ul>



