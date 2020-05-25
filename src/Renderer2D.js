import RendererAbstract from "./RendererAbstract";

export default class Renderer2D extends RendererAbstract {

    /**
     * @param {String|null} context 2d|webgl|webgl2|bitmaprenderer
     * @param {Object} contextAttributes
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     * @override
     * @return {CanvasRenderingContext2D}
     */
    getCtx(context= '2d', contextAttributes = {alpha: true}) {
        return this._canvas.getContext(context, contextAttributes);
    }

    /**
     * @param {HTMLCanvasElement|HTMLElement|OffscreenCanvas} canvas
     */
    constructor(canvas) {
        super();
        this._canvas = canvas;
    }

    /**
     * @param {*} subject
     */
    _clear(...subject) {
        this.getCtx().clearRect(0,0, this._canvas.width, this._canvas.height);
    }

    /**
     * Must be overrided
     * @param {*} subject
     * @protected
     */
    _draw(...subject) {}
}