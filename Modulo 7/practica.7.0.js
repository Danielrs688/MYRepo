//**Caso 2
// Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
// ES6600190020961234567890
// ES66 0019 0020 9612 3456 7890
//const pattern = /^ES\d{2}\s?(\d{4}\s?){4}\d{4}$/
const pattern = /^(ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
const values = ["ES6600190020961234567890","ES66 0019 0020 9612 3456 7890"];

values.forEach(value => {
    console.log(value, "=", pattern.test(value));
})

let result;
values.forEach(value => {
    result = value.match(pattern);
})

console.log("///////");
console.log("El código del país es:", result[1]);
console.log("El dígito de control es:", result[2]);