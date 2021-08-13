// Poo 

// Object Literal

const producto = {    
    nombre: "table",
    precio: 2540,
    
}
function Cliente(nom,apelli) {
    this.nom = nom;
    this.apelli = apelli;
    
}

// Object Constructor 

function Producto(nom,prec) {
    this.nom = nom;
    this.prec = prec;
    
}
// Crear funciones  que solo se utilizan en  un objeto en específico. Prototype
Producto.prototype.formatearP = function(){
    return `${this.nom} tiene el precio de $${this.prec}`
}

const producto2 = new Producto(`Monitor curvo de 49`, 5000);
const producto3 = new Producto(`celular note 20 ultra`, 30000);
const cliente = new Cliente("Pedro que gusto de verte", "supe que eras licenciado")



function formatearP (producto){
    return `${producto.nom} tiene el precio de $${producto.prec}`
}

console.log(producto2)
console.log(producto2.formatearP());
console.log(producto3.formatearP());



// Crear funciones que solo se usan en un objeto en especifico 
