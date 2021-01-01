import RenderOffScreen from "../../../src/RenderOffScreen";

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById('sprite');
    const image  = new Image();

    image.onload = (e) => {
        const offscreenCanvas = new RenderOffScreen(image);
        offscreenCanvas.drawToCanvas(canvas);
    };

    image.src = 'assets/img/welcome.png';
});
