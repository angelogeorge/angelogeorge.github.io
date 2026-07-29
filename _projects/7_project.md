---
layout: page
title: SP♤DE — a joint spectro-photometric decomposition engine
description: Fitting imaging, stellar kinematics and stellar populations under one likelihood to separate classical bulges from pseudobulges.
img: assets/img/7.jpg
importance: 1
category: methods
---

**SP♤DE** — the *Spectro-Photometric Analytic Decomposition Engine* — is a
bulge+disk decomposition code I developed at ASIAA. Where conventional
decompositions fit a single image, SP♤DE fits **imaging, stellar kinematics and
stellar populations simultaneously under one joint likelihood**, so that a
galaxy's velocity dispersion and stellar ages *actively constrain* its
structural decomposition rather than being read off afterwards.

### Why it matters

Not all bulges are the same. **Classical bulges** are dispersion-supported and
old — built by ancient mergers. **Pseudobulges** rotate, are young, and grow
secularly as bars and spiral arms funnel disk gas inward. The two form by
completely different routes, and telling them apart matters for the question I
care about: *when a galaxy stops forming stars, is the bulge responsible — and
which kind of bulge?*

Separating them reliably is hard, because the distinguishing evidence lives in
three different datasets. Photometry alone cannot see that a bulge is
dynamically hot; kinematics alone cannot see that it is old. SP♤DE's answer is
to stop treating them as separate measurements.

### How it works

The model is a single additive log-posterior over three arms — imaging,
kinematics, populations — with per-arm weighting so that the ~10⁵ imaging pixels
cannot drown out the ~10³ IFU spaxels, plus priors and an anti-swap penalty that
keeps the bulge from trading places with the disk.

- **Imaging** — DESI *r*-band, for structure, sizes, shapes and the bulge/disk
  light fraction.
- **Kinematics and populations** — IFU spectroscopy from
  [MaNGA](https://www.sdss4.org/surveys/manga/) and
  [SAMI](https://sami-survey.org/), giving V and σ maps alongside stellar ages
  and metallicities.

The MAP estimate comes from a coordinate loop: stellar populations are solved by
regularised NNLS at fixed structure and profiled out, then the structural
parameters are optimised with bounded L-BFGS on JAX autodiff gradients, warm-started
from GALFITM. [ppxf](https://pypi.org/project/ppxf/) with E-MILES templates
pins the absolute age and metallicity calibration, and variational inference
provides uncertainties, with full NUTS posteriors as the next tier.

### What's different

Existing tools solve part of this problem. **BUDDI** decomposes an IFU cube
photometrically, wavelength slice by wavelength slice, and extracts component
spectra as a post-processing step — the spectra never inform the structural fit.
**GALFIT** fits a single image by least squares. SP♤DE instead evaluates a
Bayesian posterior across all three datasets at once, and fuses external
high-resolution imaging with the IFU data.

### Status

SP♤DE has been run across the **KILOGAS** sample — roughly 450 galaxies spanning
the MaNGA and SAMI footprints — producing bulge/disk structural parameters,
component-resolved kinematics and populations, and a classical/pseudo
classification for each galaxy. Validation against independent host-galaxy
morphology confirms that the classifications track genuine formation channels.

Several papers using these catalogues are in preparation.

Project at ASIAA · 2026–present.
