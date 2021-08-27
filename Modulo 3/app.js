const booking = {count: 5, price: 127.95 };

let total = booking.count * booking.price;

const discount = total > 500 ? total * 0.2 : 0; 

console.log ("total de la reserva: ", total);

if (total > 500 && discount > 0){
console.log ("descuento: ", discount);
console.log (" total descuento: ", total - discount);
}

