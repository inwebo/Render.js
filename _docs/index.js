import Renderer2D from "../src/Renderer2D";

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById('sprite');
    const image  = new Image();

    image.onload = (e) => {
        (new Renderer2D(canvas)).drawToCanvas(canvas);
    };

    image.src = 'assets/img/welcome.png';
});
