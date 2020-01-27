# Render.js
Super simple javascript canvas renderer, it abstracts the boring parts.

## Objectives

Nous voulons éviter toutes les opérations nécessaires et redondantes pour dessiner sur un context de canvas en 2D.

## Installations

### Github
[Download](https://github.com/inwebo/Render.js.git) and extract the current depot. Include it in your application.

### Yarn
```shell script
yarnd add -d @inwebo/render.js
```
### NPM
```shell script
npm install @inwebo/render.js
```

## Classes
* [RendererAbstract](src/RendererAbstract.js) You MUST NOT instance it directly.
* [Renderer2D](src/Renderer2D.js) The main Renderer.

## Include

#### Plain javascript

```html
<script src="dist/renderer.min.js"></script>
```

#### ES6

You should really consider to use it like an ES6 class

```ecmascript 6
import Renderer2D from "@inwebo/render/";
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