const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
        
    case 'Efectivo':
        console.log('pagaste con efectivo');
        break;
        
    case 'cheque':
        console.log('pagaste con cheque, revisaremos fondos primero');
        break;
        
    case 'bitcoin':
        console.log('pagaste con bitcoin');
        break;
        default:
        console.log("aun no has pag'o")
        break;
}