const bookings = [
    { id: 1, 
      price: 45.30, 
      count: 3, 
      room: "standard", 
      prepaid: false,
      succeeded: true 
    },
    { 
      id: 2, 
      price: 92.45, 
      count: 4, 
      room: "superior", 
      prepaid: false,
      succeeded: true 
    },
    { 
      id: 3, 
      price: 63.50, 
      count: 7, 
      room: "standard", 
      prepaid: true,
      succeeded: false 
    },
    { 
      id: 3, 
      price: 37.50, 
      count: 2, 
      room: "standard", 
      prepaid: true,
      succeeded: true 
    },
    { 
      id: 5, 
      price: 87.90, 
      count: 5, 
      room: "superior", 
      prepaid: true,
      succeeded: false 
    }
   ];
   
   
function existeError() {
    let exito = true;

    let i = 0;
    while (exito) {
        console.log("comprobando reserva en posicion: " + i);
        console.log(
            "exito vale " + exito + " y la reserva es " + bookings[i].succeeded
            );
            exito - exito && bookings[i].succeeded;
            console.log("resultado de exito " + exito);
            i++;
    }

    return !exito;
}

console.log("existe reserva con error: " + existeError());