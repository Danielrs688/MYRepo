
//Calculator//inputs

var numberA = () => parseInt(document.getElementById("input-number1").value);
var numberB = () => parseInt(document.getElementById("input-number2").value);



//operaciones
var sumNumber = () => numberA() + numberB();
var restNumber = () => numberA() - numberB();
var divideNumber = () => numberA() / numberB();
var multiplyNumber = () => numberA() * numberB();

//obtener h3 resultado
var showResultSum = () => document.getElementById("result").innerText = sumNumber();
var showResultRest = () => document.getElementById("result").innerText = restNumber();
var showResultMultiply = () => document.getElementById("result").innerText = multiplyNumber();
var showResultDivide = () => document.getElementById("result").innerText = divideNumber();

//Eventos => activan las funciones
document.getElementById("sumNumber").addEventListener("click",ifSumNumber);
document.getElementById("restNumber").addEventListener("click", showResultRest);
document.getElementById("multiplyNumber").addEventListener("click", showResultMultiply);
document.getElementById("divideNumber").addEventListener("click", showResultDivide);

//Condicional
function ifSumNumber () {
    if(isNaN(numberA())|| isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, debes incluir dos numeros";
        console.log("primera");
    }else{
    showResultSum();
    console.log("segunda");
}
}
    