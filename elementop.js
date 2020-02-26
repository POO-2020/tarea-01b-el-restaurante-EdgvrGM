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
    this.precio = precio;
  }
  getDescripcion() {
    return `${this.cantidad} x ${this.producto.nombre} = ${this.producto.precio
      .valor * this.cantidad}`;
  }
}
