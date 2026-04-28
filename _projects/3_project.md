---
layout: page
title: Bulge+Disk morphology in UV vs. optical
description: Distinct growth tracks for star-forming and quiescent galaxies.
img: assets/img/8.jpg
importance: 3
category: observations
---

A galaxy's structure is not single-component. With sufficient depth and
resolution one can decompose it into a central bulge plus an extended disk —
two physically distinct ingredients with their own size–mass relations and
their own growth histories.

The third chapter of my PhD thesis extends the CLAUDS+HSC pipeline to
**multi-component Sérsic fitting** in the UV and the optical using SourceXtractor++.
The result: the structural features and the size growth of the bulges and disks of both star-forming galaxies (SFGs) 
and quiescent galaxies (QGs) show clear wavelength dependence. The disks tend to be larger in UV (for both SFGs and QGs). 
The size growth of bulges is faster than disks and their UV size growth is faster than optical size growth. 
The results are consistent with merger/accretion-driven growth of bulge component in galaxies. 


<div class="row">
  <div class="col-sm">
    {% include figure.liquid loading="eager" path="assets/img/Size-evolution-b+d.png" class="img-fluid rounded z-depth-1" title="Two-component Sérsic fit: rest-frame UV (left) vs. rest-frame optical (right)" %}
  </div>
</div>
<div class="caption">
  Evolution of the characteristic sizes of bulges and disks of Milky Way–mass star-forming galaxies (SFGs) 
  and quiescent galaxies (QGs) 
  in rest-frame UV and optical wavelengths.
</div>

**Manuscript:**
[Download the ApJ-submitted draft (PDF)]({{ '/assets/pdf/bulge_disk_draft.pdf' | relative_url }})
&nbsp;·&nbsp; Submitted to ApJ · expected acceptance Q4 2026.

> **How to attach this PDF on your end:** drop the file at
> `site/assets/pdf/bulge_disk_draft.pdf`. The link above will pick it up
> automatically on the next build. Same trick works for any other paper
> draft — just save under `assets/pdf/` and reference with
> `[Title]({{ '/assets/pdf/your_file.pdf' | relative_url }})`.
