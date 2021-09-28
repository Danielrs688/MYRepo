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


  let total = o;

  for (reserva of bookings) {
      total += reserva.price * reserva.count;
  }

   function imprimir(reserva) {
    console.log("--------");
    for (attr in booking) {
        console.log(attr.toUpperCase() + ": " + booking[attr]);
    }
        }