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

  // 1. Listar todos los productos //

  for (var product of carrito){
      console.log("--------------");
      showList(product);
  }

  function showList (product) {
      for(var attr in product){
          console.log(attr.toUpperCase() + ": " + product[attr]);
      }
  }



  //2. Eliminar el producto con id 54657 del carrito de la compra //

  let index;
  for(var i = 0; i<carrito.length; i++){
      if (carrito[i].id === 54657){
          index = 1;
      }
  }

  carrito.splice(index,1);
  console.log(carrito);



  //3. Calcular el total del carrito de la compra (price * count) //

  let total 0;

  for(product of carrito){
      total += product.price * product.count;
  }
  console.log("El total de sus productos es: " + total + "€");



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



  // 5. Si todos son premium, mostrar mensaje//

  let premium = true;
  for(product of carrito){
      if (product.premium === false){
          premium = false;
      }
  }

  if(premium === true){
      console.log("Pedido sin gastos de envío");
  } else{
      console.log("Este pedido tiene gastos de envío");
  }



  // 6. Mostrar el carrito en un listado de html básico//

  document.write("<h3> Your Shopping Cart:</h3>")
  for (var product of carrito){
      document.write ("<ul>")
      document.write ("<li>" + product.name + "</li>");
      document.write ("</ul>");
  }



  //7. Aplicar un descuento del 5% si la compra es mayor de 100€//

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