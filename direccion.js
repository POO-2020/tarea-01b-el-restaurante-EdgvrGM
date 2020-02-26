export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio){
        this.calles = calle
        this.numeroExterior = numeroExterior
        this.numeroInterior = numeroInterior
        this.colonias = colonia
        this.codigosPostal = codigoPostal
        this.ciudades = ciudad
        this.municipios = municipio

    }
    getFormatoCorto(){
        return `${this.calles} ${this.numeroExterior}`
    }
    getFormatoExtendido(){
        return `${this.calles} ${this.numeroExterior} ${this.numeroInterior} ${this.colonias} ${this.codigosPostal} ${this.ciudades} ${this.municipios}`
    }
}