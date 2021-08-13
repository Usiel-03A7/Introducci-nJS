// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProduct(){
        return `${this.nombre} tiene el precio de $${this.precio}`
    }
    regresaPrecio(){
        return `el precio del producto es ${this.precio}`
    }
}
const producto2 = new Producto(`Monitor curvo de 49`, 5000);
const producto3 = new Producto(`celular note 20 ultra`, 30000);
console.log(producto2);
console.log(producto3);