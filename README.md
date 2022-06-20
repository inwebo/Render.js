# Render.js
<img title="Discover Render.js activity on github by Inwebo veritas" alt="Render.js activity by Inwebo veritas" src="https://img.shields.io/github/commit-activity/w/inwebo/Render.js">
<img title="Discover Render.js repository on github by Inwebo veritas" alt="Render.js repository size by Inwebo veritas" src="https://img.shields.io/github/repo-size/inwebo/Render.js?logo=Render.js">
<img title="Render.js version on github" alt="Render.js version size by Inwebo veritas" src="https://img.shields.io/github/package-json/v/inwebo/Render.js?logo=Render.js">
<img title="Render.js version last commit by Inwebo veritas on github" alt="Render.js last activity by Inwebo veritas" src="https://img.shields.io/github/last-commit/inwebo/Render.js">

Super simple javascript canvas renderer, it abstracts the boring parts.

## Installations

### Github
```shell script
git clone https://github.com/inwebo/Render.js.git
```

### Yarn
```shell script
yarn add @inwebo/render.js
```
### NPM
```shell script
npm install @inwebo/render.js
```

## Classes
* [RendererAbstract](src/RendererAbstract.js) You MUST NOT instance it directly.
* [Renderer2D](src/Renderer2D.js) The main Renderer.

#### Plain javascript

```html
<script src="dist/renderer.min.js"></script>
```

#### ES6

You should really consider using it like an ES6 module

```ecmascript 6
import Renderer2D from "@inwebo/render";
```
Now the class Renderer2D is available.

## Use case

You must have one or more html canvas elements available.

```html
<canvas id="layer-0"></canvas>
<!-- n-canvas  -->
<canvas id="layer-n"></canvas>
```


## Tips and tricks

## Web
* [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [Basic animations](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
