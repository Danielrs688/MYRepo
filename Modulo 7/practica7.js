//** Caso 1
// Dado este IBAN:
// ES6600190020961234567890
// Validar que se informa con dos letras, y los números correspondientes.


const pattern = /^(ES\d{2})\d{20}|(ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
const values = ["ES66 0019 0020 9612 3456 7890", "ES982038577893000760236", "ES66 0019 0020 9612 3456 5874"];

values.forEach(value => {
    console.log('Regexp matchs with ' + value + ' ? -> ', pattern.test(value));
    console.log(pattern.exec(value));
});




