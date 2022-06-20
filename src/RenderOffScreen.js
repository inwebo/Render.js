import RendererAbstract from './RendererAbstract'

export default class RenderOffScreen extends RendererAbstract {
  /**
   * @inheritDoc
   */
  setCtx(context = 'bitmaprenderer', contextAttributes = null) {
    super.setCtx(context, contextAttributes)
  }

  /**
   * @return OffscreenCanvasRenderingContext2D
   */
  getCtx() {
    return super.getCtx()
  }

  /**
   * @param {HTMLCanvasElement|HTMLElement} canvas
   * @param {number} dx
   * @param {number} dy
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
   */
  drawToCanvas(canvas, dx = 0, dy = 0) {
    canvas.getContext('2d').drawImage(this._image, dx, dy)
  }

  /**
   * @param {HTMLImageElement} image
   * @param {Object} contextAttributes
   */
  constructor(image, contextAttributes = { alpha: true }) {
    super()
    this._canvas = new OffscreenCanvas(image.width, image.height)
    this._image = image
    this.setCtx('bitmaprenderer', contextAttributes)
  }

  /**
   * @param {*} subject
   * @private
   */
  _draw(...subject) {
    this._canvas.getCtx().transferFromImageBitmap(this._canvas.transferToImageBitmap())
  }
}
