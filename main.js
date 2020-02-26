import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";

class Main {
  constructor() {
    this.fecha = new Fecha(15, 5, 2009);
    this.tiempo = new Tiempo(7, 30, "pm");
    this.direccion = new Direccion("Av. Insurgentes",321,2,"Miguel Hidalgo",28100,"Tecoman","Armeria");
    this.precio = new Precio(1700.00)
    this.producto = new Producto("Bolillo Seco", this.precio)

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
}
let app = new Main
app.probarProducto()
