//Implementar una función que muestre por consola "Hola mundo".
var hola = () => console.log('hola mundo');
hola();

//Implementar una función que admita como parámetro un nombre y salude por consola a dicha persona.
var saluda = nombre => console.log('Hola'+ nombre);
saluda ('David');

//Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.
var mayúsculas = texto => texto.toUpperCase();
console.log(mayúsculas('pasar de minusculas a mayusculas'));

//Implementa una función que dado un string como parámetro devuelva el string en minusculas.
var minusculas = texto => texto.toLowerCase();
console.log(minusculas('PASAR DE MAYUSCULAS A MINUSCULAS'));

//Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.
var suma = (a,b) => a + b;
console.log(suma(5,2));

//Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.
var concatenación = (a,b,c) => a + '' + b + '' + c;
console.log(concatenación('Hola','soy','Dani'));

// Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada 'id'
var addParameter = (obj, propName, value) => {
    obj[propName]=value;
}

var miObjeto = {
    nombre: 'Dani',
    edad:'33',
}
addParameter(miObjeto, 'id', 1);
console.log(miObjeto);