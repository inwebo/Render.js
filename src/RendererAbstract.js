export default class RendererAbstract {
    /**
     * @param {String|null} context 2d|webgl|webgl2|bitmaprenderer
     * @param {Object} contextAttributes
     * @return {CanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext | RenderingContext | OffscreenCanvasRenderingContext2D}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     */
    getCtx(context = null, contextAttributes = {}) {}

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

    /**
     * @param {boolean} enabled you can enable / disable canvas smoothing
     */
    setSmoothing(enabled = true) {
        this.getCtx().mozImageSmoothingEnabled    = enabled;
        this.getCtx().webkitImageSmoothingEnabled = enabled;
        this.getCtx().msImageSmoothingEnabled     = enabled;
        this.getCtx().imageSmoothingEnabled       = enabled;
    }
}