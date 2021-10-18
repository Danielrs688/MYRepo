var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "hola mundo";

var searchIndex = (alphabet, letter) => {
    for (var i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) return i;
    }
    return -1;
}

var transformLetter = letter => {
    var letterIndex = searchIndex ( plainAlphabet, letter);
        if (letterIndex === -1) {
            return letter;
        } 
        else {
            return encryptedAlphabet[letterIndex];
        }
    }

    var transformMessage = message => {
        var messageLowerCase = message.toLowerCase ();
        var result = "";

        for (var letter of messageLowerCase) {
            result = result + transformLetter (letter);
        }
        return result;
    }

    console.log(transformMessage(text));