---
title: General 
description: Get started building your docs site with Starlight.
---

### <u> Introduction To our Website </u>

Our website was created in response to a general lack of accessible ohnolog datasets and visual representations of ohnologs. Furthermore, obtaining certain rights from the researchers themselves may be necessary to access the data on those sites. A key feature of this website is that users are able to freely view and download all of the data available.

On the site you are able to search for various data of interest, such as a favourite gene, through various tables which can be located towards the bottom of most sections. They can also allow you to create dotplots that compare the genomes of two distinct species, circos plots of one species at a time, and explore gene trees, as well as view ohnolog data sets and download them. You can also view external databases if you wish to find more in-depth information about a specific gene.

Below are some key definitons that are useful to know when navigating the website,

<ul>
<li><b>Whole Genome Duplication (WGD):</b>  An event in which an extra copy, or copies in some cases, of the genome of an organism is made</li>
<li><b>Ohnologs:</b>      Genes that arise from WGD events</li>
<li><b>Synteny:</b>       Two or more genes being on the same chromosome in a particular species</li>
<li><b>Microsynteny:</b>  A type of synteny in which only a small number of genes are conserved</li>
<li><b>Circos Plot:</b>   A visual representation of genomic data</li>
</ul>

### <u> Tables </u>

The majority of the website's sections have tables towards the bottom of each page. Not all tables have exactly the same headers; the following table lists all the possible headings you may see on the website.


| Genome | Protein |Species | State | Source | Version | Scaffolds | Genes |Segments| Labels |

The points below explain what each header refers to, 

<ul>
<li><b>Genome:</b>     Name of the genome</li>
<li><b>Protein:</b>    Name of the protein</li>
<li><b>Species:</b>    Name of the species</li>
<li><b>State:</b>      The genome will either be present, a modern genome, or other, an ancient genome</li>
<li><b>Source:</b>     Where the data came from</li>
<li><b>Version:</b>    What version the data is from Ensembl, RefSeq or other</li>
<li><b>Scaffolds:</b>  This is the joining of a genomic sequence's non-contiguous series</li>
<li><b>Genes:</b>      Name of the gene/Number of genes in the genome</li>
<li><b>Segments:</b>   How many segments are there in the genome</li>
<li><b>Labels:</b>     Evidence-based. They will either be micro-synteny, macro-synteny or gene phylogeny</li>
</ul>

The data on the website is completely accessible to the public, and you are free to download it all or simply choose particular genes of interest. In order to do this, you will need to find the table that contains the data you are looking for. In general, you will first need to select all options relevant to you in the boxes at the top of the page that has the necessary table or type in the name of your gene/genome/protein if a search box is present. This refines your search to find what you are specifically looking for.  
Once the table is displaying your data a 'Download' button will appear on the right hand side of the table. If you wish to find other data, or you have made a mistake, there is a 'Cancel' button next to 'Download' which removes everything that was previously selected.

Look for this button on the tables (top right) if you wish to download any, or all, data from our site:
<img src="/src/assets/download.jpg">

### <u> Global Selection </u>
One of the tools available on the website is Global Selection. This means that when a gene is selected anywhere on our website, either through a table, or graphically, it will continue to be added to your other selections , again, such as tables or plots. This selection persists across pages and this may affect any plots, searches or data you wish to download. If you wish to avoid this, it is important to ensure that no genes are still selected in the table beforehand. You can easily do this by clicking the 'Cancel' button which can be found at the top right of every table.

### <u> Databases, Internal Links and External Links </u>

On our website, some tables have a 'Source' component which leads you to other websites, these links take you to external databases. The information on the external databases might be useful to you if you wish to learn more about a particular gene. Ensembl, RefSeq, and other external datasets are included.

External links databases:
  <img src="/src/assets/source.jpg">

As well as this, we have also included internal links which lead you to the 'Phylogeny' and 'Synteny' sections of the site. This makes it quite simple to construct graphs or look for other relevant information on our site as it saves you time from reselecting and searching again.

Internal link for the <b>Phylogeny</b> section:
  <img src="/src/assets/internal_tree.png">


Internal link for the <b>Synteny</b> section:
 <img src="/src/assets/internal_synteny.png">


 <script>
function myFunction() {
  window.location.href = "https://aoifolution.gen.tcd.ie/ohnologs"
}
</script>


