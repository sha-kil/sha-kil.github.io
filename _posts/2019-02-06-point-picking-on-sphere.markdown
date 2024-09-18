---
layout: post
title:  "Picking point from a disk with uniform distribution"
date:   2019-02-06 21:32:02 -0400
categories: math THREE-js
---

<div class='threejs'>
    <div id='cube'></div>
    <button id="reset-button">Reset</button>
</div>

<br>
```javascript
const u = 100 * Math.random();
const theta = 2 * Math.PI * Math.random();

const x = Math.sqrt(u) * Math.cos(theta)
const y = Math.sqrt(u) * Math.sin(theta)
```

## Useful Links

1. <a href="https://apps.dtic.mil/sti/pdfs/ADA626479.pdf" target="_blank">Point Picking and Distributing on the Disc and Sphere</a>
2. <a href="https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions/x786f2022:polar-spherical-cylindrical-coordinates/a/triple-integrals-in-spherical-coordinates" target="_blank">Triple integrals in spherical coordinates</a>


<script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/"
    }
  }
</script>

<link rel="stylesheet" href="/assets/css/style.css">

<script type="module" src="/assets/js/disc.js"></script>