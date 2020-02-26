import Precio from "./precio.js";

export default class ElementoPedido {
  /**
   *
   * @param {string} producto
   * @param {number} cantidad
   * @param {number} precio
   */
  constructor(producto, cantidad, precio) {
    this.producto = producto;
    this.cantidad = cantidad;
  }

  getDescripcion() {
    let elemento = this.cantidad * this.producto.precio.valor;
    elemento = new Precio(elemento);
    return `${this.cantidad} X ${this.producto.nombre} ${elemento.getPrecio()}`;
  }
}
