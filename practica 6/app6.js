// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [
{
description: "Goma de borrar",
price: 0.25,
tax: LOWER_TYPE,
stock: 2,
units: 0,
},
{
description: "Lápiz H2",
price: 0.4,
tax: LOWER_TYPE,
stock: 5,
units: 0,
},
{
description: "Cinta rotular",
price: 9.3,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Papelera plástico",
price: 2.75,
tax: REGULAR_TYPE,
stock: 5,
units: 0,
},
{
description: "Escuadra",
price: 8.4,
tax: REGULAR_TYPE,
stock: 3,
units: 0,
},
{
description: "Pizarra blanca",
price: 5.95,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Afilador",
price: 1.2,
tax: LOWER_TYPE,
stock: 10,
units: 0,
},
{
description: "Libro ABC",
price: 19,
tax: EXEMPT_TYPE,
stock: 2,
units: 0,
},
];

// APARTADO 1. Generar HTML dinámico para representar seleccion de unidades para cada producto de la lista.

// HTML --> div id="product-list-container"

var createQuantity = (product) => {
    var quantity = document.createElement("input");
    quantity.setAttribute("type","number");
    quantity.setAttribute("name","quantity-" + product.description);
    quantity.setAttribute("id","item-" + product.description);
    quantity.setAttribute("min","0-");
    quantity.setAttribute("max",product.stock);
    quantity.addEventListener("change", event => product.units - event.target.value);
    return quantity;
};

var showProductList = (productList) => {
    var containerList = document.getElementById("shopping.list");

    for (var product of productList) {
        var description = document.createElement("li");
        description.setAttribute("class","shopping.list_item");

        description.innerText = product.description + " - " + product.price + "€/ud.";
        containerList.appendChild(description);
        description.appendChild(createQuantity(product));
    }
}




//var container = document.getElementById("productList"); //

//var createProduct = product => {
   // var input = document.createElement("input");
   // input.setAttribute("type", "number");
   // input.addEventListener("change", event => product.units = event.target.value);
   // container.appendChild(input);
//}
// var showProducts = producList => {
//    for( var product of productList){
 //       createProduct(product);
 //   }
//}

//showProducts(products);

// document.getElementById("btn").addEventListener("click", () => console.log(products)); 