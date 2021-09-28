const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
  ];

  // 1 y 3. Mostrar carrito y eliminar producto con id 54657//
  var indice;

  for (i = 0; i < carrito.length;i++){
      if(carrito[i].id == 54657){
          indice = i;
      };
  }
   
  carrito.splice(indice,1);

  for(producto of carrito){
      imprimir(producto);
  }

  function imprimir(lista) {
      console.log("id: ", lista.id);
      console.log("name: ", lista.name);
      console.log("price: ", lista.price);
      console.log("count: ", lista.count);
      console.log("premium: ", lista.premium);
  }

// 2. Listar todos los productos //

   for (i = 0; i < carrito.length; i++) {
       imprimir (carrito[i])
   }

   function imprimir (producto){
       console.log("id: " + producto.id);
       console.log("name: " + producto.name);
       console.log("price: " + producto.price);
       console.log("count: " + producto.count);
       console.log("premium: " + producto.premium);
   }



   //4. Filtrar por los productos que sean premium //

  for(product of carrito){
    if(product.premium){
        showPremiumProducts(product);
    }
}

function showPremiumProducts (product){
    for(var attr in product){
        console.log(attr.toUpperCase() + ": " + product[attr]);
    }
}



   // 5. filtrar por los productos que sean prime, Vamos a eliminar los no premium/
   //

   for (i = 0; i < carrito.length; i++ ) {
       if(carrito[i].premium == false){
           var elementoEliminados = carrito.splice(i, 1);
       }
       lista(carrito[i]);
   }

   function lista(product) {
       for (field in product) {
           console.log(field + ": " + product[field]);
       }
   }



   //6. Aplicar un descuento del 5% si la compra es mayor de 100€//

  let total = 0;
  for (product of carrito){
      total += product.count * product.price
  }
  if(total > 100){
      let disccount = total * 0.05;
      total = total - disccount;
      console.log("You get a disccount of" + disccount + "€");
      console.log("Total: " + total + "€");
  }