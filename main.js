import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elementop.js"
import Pedido from "./pedido.js";
import Restaurante from "./restaurante.js";
import Cliente from "./cliente.js";

class Main {
  constructor() {
    this.fecha = new Fecha(15, 5, 2009);
    this.tiempo = new Tiempo(7, 30, "pm");
    this.direccion = new Direccion("Av. Insurgentes",321,2,"Miguel Hidalgo",28100,"Tecoman","Armeria");
    this.precio = new Precio(1700.00)
    this.producto = new Producto("Bolillo Seco", this.precio)
    this.cliente = new Cliente("Chabelo", this.direccion, 313-113-1122)
    this.elementoPedido = new ElementoPedido(this.producto , 35, this.precio)
    this.pedido = new Pedido(this.fecha, this.tiempo, this.direccion)
    this.pedido.agregarElemento(this.elementoPedido)
    this.restaurante = new Restaurante("La polar", 312-455-3456, this.direccion)

  }
  probarFecha() {
    console.log(`Año ${this.fecha.getAños()}`);
    console.log(`Meses ${this.fecha.getMeses()}`);
    console.log(`Semanas ${this.fecha.getSemanas()}`);
    console.log(`Días ${this.fecha.getDias()}`);
    console.log(`Fecha ${this.fecha.getFecha()}`);
    console.log(`Día ${this.fecha.getDiaFecha()}`);
  }
  probarTiempo() {
    console.log(`${this.tiempo.getFormato12()}`)
    console.log(`${this.tiempo.getFormato24()}`)
  }
  probarDireccion() {
    console.log(`${this.direccion.getFormatoCorto()}`)
    console.log(`${this.direccion.getFormatoExtendido()}`)
  }
  probarPrecio() {
      console.log(`${this.precio.getPrecio()}`)
  }
  probarProducto() {
      console.log(`${this.producto.getDescripcion()}`)
  }
  probarElemento() {
      console.log(`${this.elementoPedido.getDescripcion()}`)
  }
  probarCliente() {
    console.log(`${this.cliente.getPerfil()}`)
  }
  probarPedido() {
    this.pedido.listarElementos()
    console.log(this.pedido.getCostoTotal())
    console.log(this.pedido.getProductos())
    console.log(this.pedido.getNumeroElementos())
    console.log(this.pedido.getResumen())
  }
  probarRestaurante() {
    this.restaurante.registrarProducto(this.producto)
    this.restaurante.registrarPedido(this.pedido)

    this.restaurante.listarProductos()
    this.restaurante.listarPedidos()
  }
}
let app = new Main
app.probarRestaurante()
