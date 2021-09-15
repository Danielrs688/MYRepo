var getName = () => document.getElementById("input-name").value;
var getSurname1 = () => document.getElementById("input-surname1").value;
var getSurname2 = () => document.getElementById("input-surname2").value;

var getFullname = () => getName() + " " + getSurname1() + " " + getSurname2();

function submitName () {
    document.getElementById("full-name").innerText = getFullname();
}

document.getElementById("input-name").addEventListener("keyup".submitName);
document.getElementById("input-surname1").addEventListener("keyup".submitName);
document.getElementById("input-surname2").addEventListener("keyup".submitName);