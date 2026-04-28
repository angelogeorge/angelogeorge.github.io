---
layout: page
title: Environment & galaxy size growth
description: Comparing quiescent galaxies in clusters vs. the field at two rest-frame wavelengths.
img: assets/img/3.jpg
importance: 2
category: observations
related_publications: true
---

Massive quiescent galaxies grow in size after they stop forming stars — but
the effects of the environment on *how* they grow is debated. 
In field environments, the growth happens through 2 channels: minor mergers that build an
extended low-density envelope, and/or new arrivals (recently-quenched larger
galaxies dropping into the quiescent population) inflating the median size
without any individual galaxy growing. However, is it true in the dense regions like galaxy clusters?

Using the same CLAUDS+HSC pipeline I built for George et al., 2024 {% cite george2024two %}, I compared
quiescent galaxies (QGs) in the cores of massive clusters (HSC-SSP cluster
catalogues) with field galaxies at matched mass and redshift. The result, in
ApJ 2025: environment significantly impacts QG size evolution, 
with QGs in cluster cores generally showing different size-mass relations (SMR) 
but similar size growth compared to field galaxies. 
QGs inthe densest cluster environments are consistently found to be smaller in size 
compared to their counterparts in the field. This difference is more pronounced in the rest-frame UV light. 
Cluster QGs are typically smaller than field counterparts at a given mass 
due to dense, high-velocity environments, 
yet they grow in size by accretion and environmental quenching of "newcomer" galaxies.




Published in [ApJ 987, 45 (2025)](https://doi.org/10.3847/1538-4357/addc6b) {% cite george2025environment %}.


<div class="row">
  <div class="col-sm">
    {% include figure.liquid loading="eager" path="assets/img/Size-evolution-env.png" class="img-fluid rounded z-depth-1" title="Two-component Sérsic fit: rest-frame UV (left) vs. rest-frame optical (right)" %}
  </div>
</div>
<div class="caption">
  Redshift evolution of the characteristic sizes of cluster and field QGs in rest-frame UV and optical wavelengths.
Re are characteristic sizes of log M = 10.7 galaxies and are taken from the SMR fits. The best-fitting power-law functions are
plotted as solid curves, with their uncertainties shown as shaded regions. Left: The first panel compares the size evolution of
field QGs in UV (orange squares) and optical (maroon diamonds). The second panel compares the same for cluster QGs in UV
(red pentagons) and optical (brown circles). Right: The first panel depicts the size evolution of field and cluster QGs in the
rest-frame UV and the second panel illustrates the same in the rest-frame optical. The rest of the details are the same as in the
left panels.
</div>
