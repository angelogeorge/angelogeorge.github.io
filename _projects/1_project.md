---
layout: page
title: Galaxy size evolution with CLAUDS + HSC
description: Two-wavelength structural analysis of galaxies in COSMOS since z ~ 1.
img: assets/img/12.jpg
importance: 1
category: observations
related_publications: true
---

For my PhD I built a structural-analysis pipeline that fits Sérsic profiles
to galaxies in the COSMOS field at *two* rest-frame wavelengths
simultaneously — the rest-frame **UV**, traced by the deep U-band imaging from
[CLAUDS](https://www.clauds.net/) (CFHT MegaCam), and the rest-frame
**optical**, traced by the deep grizy imaging from
[HSC-SSP](https://hsc.mtk.nao.ac.jp/ssp/) (Subaru Hyper Suprime-Cam). The
pairing is unique: CLAUDS goes ~28th magnitude in U, and HSC matches that
depth in five optical filters over the same square degrees.

The science question: when we say a galaxy "grew larger" since z~1, is it
because the underlying stellar mass redistributed, or because the wavelength
in which we traced light changed as the population aged? The answer matters
for every size–mass relation in the literature.

The pipeline I wrote runs SourceXtractor++ + GALFIT in parallel on dozens of
CPU cores, with custom error characterisation via image simulations. The
first paper from this work appeared in MNRAS in 2024.
