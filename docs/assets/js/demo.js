import RenderOffScreen from "../../../src/RenderOffScreen";

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById('sprite');
    const image  = new Image();

    image.onload = (e) => {
        (new RenderOffScreen(image)).drawToCanvas(canvas);
    };

    image.src = 'assets/img/welcome.png';
});
