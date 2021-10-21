var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "y:'q phae:";

var searchIndex = (alphabet, letter) => {
    for (var i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) return i;
    }
    return -1;
}

var transformLetter = (letter, origin, destino) => {
    var letterIndex = searchIndex (origin, letter);
        if (letterIndex === -1) {
            return letter;
        } 
        else {
            return destino[letterIndex];
        }
    }

    var transformMessage = message => {
        var messageLowerCase = message.toLowerCase ();
        var result = "";

        for (var letter of messageLowerCase) {
            result = result + transformLetter (letter, encryptedAlphabet, plainAlphabet);
        }
        return result;
    }

    console.log(transformMessage(text));


   
   
    var showResultplainAlphabet = () => document.getElementById("transformMessage(text)").innerText = encrypt();
var showResultencryptedAlphabet = () => document.getElementById("transformMessage(text)").innerText = descrypt();