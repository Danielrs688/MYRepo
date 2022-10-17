//* Validar sintaxis tarjeta de crédito
//* Caso 1  Vamos a validar los siguiente formatos (todos válidos) 5299 6400 0000 0000  5299-6400-0000-0000   5299640000000000 

// const pattern = /^5[1-5]\d{2}((\s?|\-)\d{4}){3}$/ 
// const values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

const pattern = /^50|51|52|53|54|55$/;
const values = ['52', '53', '54', '55', '50', '51'];

values.forEach(value => {
    console.log(value + " =  ", pattern.test(value));
});
