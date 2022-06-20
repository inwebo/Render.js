import RendererAbstract from './RendererAbstract'

export default class Renderer2D extends RendererAbstract {
  /**
   * @param {String|null} context 2d
   * @param {Object} contextAttributes
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
   */
  setCtx(context = '2d', contextAttributes = { alpha: true }) {
    this._ctx = this._canvas.getContext(context, contextAttributes)
  }

  /**
   * @override
   * @return {CanvasRenderingContext2D}
   */
  getCtx() {
    return this._ctx
  }

  /**
   * @param {HTMLCanvasElement|HTMLElement} canvas
   * @param {Object} contextAttributes
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
   */
  constructor(canvas, contextAttributes = { alpha: true }) {
    super()
    this._canvas = canvas
    this.setCtx('2d', contextAttributes)
  }

  /**
   * @param {*} subject
   */
  _clear(...subject) {
    this.getCtx().clearRect(0, 0, this._canvas.width, this._canvas.height)
  }

  /**
   * Must be overrided
   * @param {*} subject
   * @protected
   */
  _draw(...subject) {}

  /**
   * @param {boolean} enabled Enable or disable canvas smoothing, default true
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
   */
  setSmoothing(enabled = true) {
    this.getCtx().mozImageSmoothingEnabled = enabled
    this.getCtx().webkitImageSmoothingEnabled = enabled
    this.getCtx().msImageSmoothingEnabled = enabled
    this.getCtx().imageSmoothingEnabled = enabled
  }
}
