    // function sumar (n1, n2){
    //     return n1+n2
    // }
    // const resultado = sumar(2, 3)
    // console.log(resultado);


    let total =0;

    function Addprecio (precio){
        return total+=precio;
    }

    function calcularImpo (tot){
        return 1.16 * tot
    }

    total = Addprecio(200);
    total = Addprecio(400);
    total = Addprecio(600);
    
    console.log('SUbtotal sin I.V.A. es:'+ total);

    const totalPa = calcularImpo(total)
    console.log(totalPa)
