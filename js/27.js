// Poo 

// Object Literal
const producto = {    
    nombre: "table",
    precio: 2540,
    
}

// Object Constructor 

function Producto(nom,prec, marca) {
    this.nom = nom;
    this.prec = prec;
    this.marca = marca;
}
const producto2 = new Producto(`Monitor curvo de 49`, 5000,"Philips");
const producto3 = new Producto(`celular note 20 ultra`, 30000,"Samsung");
const producto4 = new Producto(`laptop gamer`, 25000,"Dell");
console.log(producto2);
console.log(producto3);
console.log(producto4);