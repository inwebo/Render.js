export default class RendererAbstract {
    /**
     * @param {String|null} context 2d|webgl|webgl2|bitmaprenderer
     * @param {Object} contextAttributes
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     */
    setCtx(context = null, contextAttributes = {}) {}

    /**
     * @return {CanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext | RenderingContext | OffscreenCanvasRenderingContext2D}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     */
    getCtx() {}

    /**
     * @param {*} subject
     */
    _clear(subject) {}

    /**
     *
     * @param {*} subject
     */
    draw(...subject) {
        this.getCtx().save();
        this._clear(subject);
        this._draw(subject);
        this.getCtx().restore();
    }

    /**
     * Must be override
     * @param {*} subject
     * @protected
     */
    _draw(subject) {}
}