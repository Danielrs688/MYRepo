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

var container = document.getElementById("productList"); //

var createProduct = product => {
var input = document.createElement("input");
var element = document.createElement("li");
element.innerHTML = product.description + "  "  + product.price;
product.description = product.price * product.units;
input.setAttribute("type", "number");
input.addEventListener("change", event => product.units = parseInt(event.target.value));
element.appendChild(input);
container.appendChild(element);
}

var showProducts = productList => {
for( var product of productList){
    createProduct(product);
 }
}



showProducts(products);

document.getElementById("btn").addEventListener("click", () => console.log(products)); 