import RendererAbstract from "./RendererAbstract";

export default class Renderer2D extends RendererAbstract {

    /**
     * @param {String|null} context 2d|webgl|webgl2|bitmaprenderer
     * @param {Object} contextAttributes
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     * @return {CanvasRenderingContext2D}
     */
    getCtx(context= '2d', contextAttributes = {alpha: true}) {
        return this._canvas.getContext(context, contextAttributes);
    }

    /**
     * @param {[]} subject
     */
    _clear(...subject) {}

    /**
     * Must be overrided
     * @param {[*]} subject
     * @protected
     */
    _draw(...subject) {}
}