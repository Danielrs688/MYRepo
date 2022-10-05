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

// FUNCIONES CON IF/ELSE, SWITCHES Y COMPROBACIONES
// 1****** // Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null

var undNull = (info) => {
    if (info === undefined){
        return "Is undefined";
    } else if (info ===null) {
        return "Is null";
    } else {
        return "Is" + typeof(info);
    }
};

var isNullOrUndefined = x => (x === null || x === undefined);

console.log(undNull("null"));

// 2 *** // Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.

var typeNumber = (Number) => {
    if (isNaN(Number)) {
        return Number + "no es un número";
    } else if (Number >= 0){
        return Number + "es positivo";
    } else {
        return Number + "es negativo";
    }
};
    
  console.log(typeNumber(100));    

// 3 **** // Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100

var typeNumber100 = (Number) => {
    if (isNaN(Number)) {
        return number + "no es un número";
    } else if ( number > 100) {
        return number + "es mayor que 100";
    } else if ( number < 100) {
        return number + "es menor que 100";
    } else {
        return number + "es igual que 100";
    }
};

console.log(typeNumber100("sdfsdf"));

// 4*******// Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no

var user = {
    surname: "Robles",
    hair:"blode",
    age: 34
};

var objetcHasName = (obj) => {
    if (obj.hasOwnProperty('name')) {
        return obj;
    } else {
        return "El objeto no tiene la propiedad";
    }
};

console.log(objetcHasName());

// 5***// Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo
/**
 * Esta funcion comprueba si num1 es divisible por num2
 * @param {*} num1 
 * @param {*} nume2 
 * @returns 
 */
var isDivisible = (num1, nume2) => (num1 % num2 === 0);

console.log(isDivisible(20,5));

// 6** Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracter

var comprobateString = (str,num) => (str.length === num);

console.log (comprobateString("Hola que tal", 15));

// 7*** Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva día de la semana en texto

var dayOfWeek = (day) => {
    switch (day) {
        case 1:
            return "Es lunes";
        case 2:
            return "Es martes";
        case 3:
            return "Es miércoles";
        case 4:
            return "Es jueves";
        case 5:
            return "Es viernes";
        case 6:
            return "Es sabado";
        case 7:
            return "Es domingo";
        default:
            return "No es un dia de la semana";    
    }
}

console.log(dayOfWeek(4));

//8*** Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto

var numberOfMonth = (Month) => {
    switch (Month) {
        case 1:
            return "Es Enero";
        case 2:
            return "Es Febrero";
        case 3:
            return "Es Marzo";
        case 4:
            return "Es Abril";
        case 5:
            return "Es Mayo";
        case 6:
            return "Es Junio";
        case 7:
            return "Es Julio";
        case 8:
            return "Es Agosto";
        case 9:
            return "Es Septiembre";
        case 10:
            return "Es Octubre";
        case 11:
            return "Es Noviembre";
        case 12:
            return "Es Diciembre";
        default:
            return "No es ningún mes";
    }
}

console.log(numberOfMonth(4));

//9*** Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo

let shop1 = ['shoes','shirts','socks','sweaters'];
let shop2 = [ 'shoes', 'shirts', 'socks', 'sweaters', 'coasts'];

var arrayLength = (arr1, arr2) => {
    if (arr1.length > arr2.length) {
        return "Array2 es más largo"
    } else {
        return "Array1 y Array2 son iguales";
    }
};

console.log(arrayLength());

//10*** Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no

let shop1 = ['shoes','shirts','socks','sweaters'];
let shop2 = [ 'shoes', 'shirts', 'socks', 'sweaters', 'coasts'];

var isFirstElementEqual = (arr1, arr2) => Array.isArray(arr1) && Array.isArray(arr2) && arr1[0] === arr2[0];

console.log(isFirstElementEqual(shop1, shop2));

// FUNCIONES CON ARRAYS //

//1*** Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir,devuelva undefined.

var Array1 = [1,2,3];

var arrayNum = ar => {
    if (ar.length > 1) {
        return ar[1]
    } else {
        return undefined
    }
};

console.log (arrayNum(Array1));

//2** Implementa una función que admita un string como parámetro y devuelva la última letra.

var textString = "Regar las macetas";
var getLastLetter = str => {
    var lastLetter = str.length - 1;
    return str[lastLetter];
}
console.log(getLastLetter(textString));

// 3**Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado

var fastFood = ("pizza","burger","hotdog");
var swapFirstAndLastElement = a => {
    var tempElement = a [0];
    var lastIndex = a.length -1;
    a[0] = a[lastIndex];
    a[lastIndex] = tempElement;
    console.log(a);
}
swapFirstAndLastElement(fastFood);

// FUNCIONES CON BUCLES

// 1** Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el nº

var repeat = (text, n) => {
    for (var i = 0; i < n; i++) {
        console.log(i,text);
    }
}

repeat("hola",3);

// 2** Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto

var numProps = obj => {
    var result = 0;
    for (var prop in obj) {
        if(obj.hasOwnProperty(prop)) result++;
    }
    return result;
}

console.log(numProps({name:"Dani", age:"33"}));

//3**Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades

var showProps = obj => {
    for (var prop in obj) {
        console.log(obj[prop]);
    }
}

console.log(showProps({name: "Dani", age: "33"}));

//4** Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento del array multiplicado por dicho nº

var multArray = (arr, x) => {
    var result = 0;
    for (var item of arr) {
        result += item * x;
        }
        return result;
}

console.log(multArray([1,2],2));

//5** Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho caracter en el string


var searchInString = (str, target) => {
    var occurrences = 0;
    for (var i = 0; i< str.length; i++) {
        if (str[i] == target) occurrences++;
    }
    return occurrences;
}

console.log(searchInString("Hola como estas señor","o"));

//6** Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola

var showArrayItems = arr => {
    for(var item of arr) {
        console.log(item);
    }
};

showArrayItems([2,4,6,7]);

//7** Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo muestre por consola

var showArrayItemsReverse = arr => {
    for(var i = arr.length -1; i>= 0; i--) {
        console.log(arr[i]);
    }
};

showArrayItemsReverse("hola");


//8** Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos son menor a dicho nº y cuantos no

var numStats = (arr, num) => {
    var result = [0, 0, 0];
    for(var item of arr) {
        if (item === num) result[1]++;
        else if (item < num) result[0]++;
        else result[2]++;
    }

    return result;
};

console.log(numStats([2, 4, -1, 6], 4));

//9**Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el segundo

var anyInCommon = (arr1, arr2) => {
    for (var a of arr1) {
        for(var b of arr2) {
            if (a === b) return true;
        }
    }
    return false;
}

console.log(anyInCommon([1, 2, 3], [0, 5, 6]))

//10** Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo y viceversa. Muestra los arrays transformados por consola.

var swapArrays = (arr1, arr2) => {
    var i = 0;
    while (i < arr1.length && i < arr2.length) {
        var tmp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = tmp;
        i++;
    }
    console.log(arr1, arr2);
}

swapArrays([1, 2], ["a", "b"]);

//11** Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.

var objectFromArray = arr => {
    var result = {};
    for (var i = 0; i< arr.length; i++) {
        var propName = "prop" + i;
        result [propName] = arr[i];
    }
    return result;
}

console.log(objectFromArray(["hola", "adios"]));

//12** Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado. Muestra por consola cada elemento por el que iteres

var iterateArrayFrom = (arr, startIndex) => {
    if (startIndex < arr.length && startIndex >= 0) {
        for( var i = startIndex; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

iterateArrayFrom(["uno", "dos","trest"], 1);

//13** Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array

var search = (arr, target) => {
    for (var item of arr) {
        if (item === target) return true;
    }
    return false;
}

console.log(search([1,2], 3));

//14** Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y otra función equivalente que haga la traducción inversa.

var fEn = [ "apple","orange","banana"];
var fEs = [ "manzana", "naranja","platano"];

var translateFruitToEs = fruit => fEs[fEn.indexOf(fruit)];

console.log(translateFruitToEs("orange"));

//15** Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés

var showReverse = text => {
    var result = "";
    for (var i = text.length - 1; i >= 0; i--) {
        result += text [i];
    }
    console.log(result);
};

showReverse("orden correcto");

//16** Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’

var funCapitals = text => {
    var result = "";
    for(var i= 0; i < text.length; i++) {
        result += i % 2 === 0 ? text[i].toUpperCase() : text[i];
    }
    return result;
};

console.log(funCapitals("hola caracola"));

//17** Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos de cada subarray y mostrarlos por consola.

var iterateSubItems = arr => {
    for(var subArr of arr) {
        for(var item of subArr) {
            console.log(item);
        }
    }
};

var myArr = [[1,2], ["inicio","fin"], "hola", 8];
iterateSubItems(myArr);
