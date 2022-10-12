//* Validar sintaxis tarjeta de crédito

const pattern = /^50|51|52|53|54|55$/;
const values = ['52', '53', '54', '55', '50', '51'];

values.forEach(value => {
    console.log('Regex matchs with'+ value +'? ->', pattern.exec(value));
})