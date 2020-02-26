import Precio from "./precio.js";
import producto from "./producto.js"

export default class Pedido {
    constructor(fecha, hora, cliente) {
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos = [];
    }
    agregarElemento(elemento) {
        this.elementosPedidos.push(elemento);
    }
    listarElementos() {
        this.elementosPedidos.forEach((elemento, i) => {
            console.log(`(${i + 1})  ${elemento.getDescripcion()}`);
        });
    }
    getCostoTotal() {
        let total = 0
        this.elementosPedidos.forEach((elemento) => {
            total = (total + (elemento.producto.precio.valor * elemento.cantidad));
        });
        total = new Precio(total);
        return total.getPrecio();
    }
    getProductos() {
        let productos = 0;
        this.elementosPedidos.forEach((elemento, i) => {
            productos = productos + elemento.cantidad;
        });
        return productos;
    }
    getNumeroElementos() {
        let numeroDeElementos = 0;
        this.elementosPedidos.forEach((elemento, i) => {
            numeroDeElementos = numeroDeElementos + 1;
        });
        return numeroDeElementos;
    }
    getResumen() {
        return `${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos - total ${this.getCostoTotal()}`;
    }
}