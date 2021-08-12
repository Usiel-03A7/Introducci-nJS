// This
const reservacion = {
        nombre: "usiel",
        apellido: "solano",
        total: 5000,
        pagado: false,
        informacion: function (){
            console.log(`Nombre: ${this.nombre} apellido: ${this.apellido}  el total ${this.total}`)
        }
}
const reservacion2 = {
        nombre: "Nala",
        apellido: "Onaiugna",
        total: 5000,
        pagado: false,
        informacion: function (){ // no hacer arrow pues apuntarías a variable global y no a la del metodo
            console.log(`Nombre: ${this.nombre} apellido: ${this.apellido}  el total ${this.total}`)
        }
}


reservacion.informacion();
reservacion2.informacion();