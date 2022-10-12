//**  Validacion de Matrícula

const pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/

const values = [ "2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

values.forEach(value => {
    console.log(value, "=", pattern.test(value));
})

let result;
values.forEach (value => {
    console.log(value.match(pattern));
})

console.log(result)