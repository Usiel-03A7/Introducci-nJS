const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
        
    case 'Efectivo':
        console.log('pagaste con tarjeta');
        break;
        
    case 'cheque':
        console.log('pagaste con tarjeta');
        break;
        
    case 'bircoin':
        console.log('pagaste con tarjeta');
        break;
        default:
        console.log("aun no has pag'o")
        break;
}