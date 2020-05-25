import RendererAbstract from "./RendererAbstract";

export default class RenderOffScreen extends RendererAbstract {

    /**
     * @inheritDoc
     */
    getCtx(context = '2d', contextAttributes = {alpha: true}) {
        return this._offScreen.getContext(context, contextAttributes);
    }

    /**
     * @return {ImageBitmap}
     */
    getOffScreenImageBitmap() {
        return this._offScreen.transferToImageBitmap();
    }

    /**
     * @param contextId
     * @param {Object} contextAttributes
     */
    drawOffScreenCanvas(contextId = '2d', contextAttributes = {alpha: true}) {
        this.getCtx(contextId).drawImage(this._image, 0, 0);
    }

    /**
     * @param {HTMLCanvasElement|HTMLElement} canvas
     * @param {HTMLImageElement} image
     * @param {boolean} draw Will draw image source
     */
    constructor(canvas, image, draw = true) {
        super();
        this._canvas    = canvas;
        this._offScreen = new OffscreenCanvas(image.width, image.height);
        this._image     = image;

        if(draw) {
            this.drawOffScreenCanvas();
        }
    }

    _draw(...subject) {
        this._canvas.getContext('bitmaprenderer').transferFromImageBitmap(this.getOffScreenImageBitmap());
    }
}