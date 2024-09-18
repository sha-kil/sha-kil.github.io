---
layout: post
title:  "Picking point from a sphere with uniform distribution"
date:   2019-02-15 21:32:02 -0400
categories: math THREE-js
---

<div class='threejs'>
    <div id='cube'></div>
    <button id="reset-button">Reset</button>
</div>

<br>
```javascript
const u = Math.random() * r;
const v = 2 * Math.random() - 1;            // to radians
const theta = 2 * Math.PI * Math.random();  // to radians

const ro = Math.cbrt(u);
const sin_phi = Math.sqrt(1 - v * v);

const x = ro * sin_phi * Math.cos(theta);
const y = ro * sin_phi * Math.sin(theta)
const z = ro * v;
```

## Useful Links

1. <a href="https://apps.dtic.mil/sti/pdfs/ADA626479.pdf" target="_blank">Point Picking and Distributing on the Disc and Sphere</a>
2. <a href="https://byjus.com/maths/sector-of-a-circle/">Sector Of A Circle</a>
3. <a href="https://www.khanacademy.org/math/multivariable-calculus/integrating-multivariable-functions/x786f2022:polar-spherical-cylindrical-coordinates/a/triple-integrals-in-spherical-coordinates" target="_blank">Triple integrals in spherical coordinates</a>


<script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/"
    }
  }
</script>

<link rel="stylesheet" href="/assets/css/style.css">

<script type="module" src="/assets/js/sphere.js"></script>