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
        console.log(this.precio)
    }
}
const producto2 = new Producto(`Monitor curvo de 49`, 5000);
const producto3 = new Producto(`celular note 20 ultra`, 30000);


// Herencia 

class Libros extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProduct(){
        return `${super.formatearProduct()} y su ISBN es: ${this.isbn}`
    }
    obtenerPrecio(){
        super.regresaPrecio();
    }
}
const libro = new Libros("Javascript la revolucion", 120, "658549889564");

console.log(libro.formatearProduct()); 
console.log(libro.obtenerPrecio()); 

console.log(producto2.formatearProduct());
console.log(producto2.regresaPrecio());
