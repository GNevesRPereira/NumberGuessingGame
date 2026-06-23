let generateRandomNumber = Math.floor((Math.random() * 100) + 1);
let generatedNumber = generateRandomNumber;

//For testing purposes only
console.log(generatedNumber);

let getPlayerGuess;

function getValidGuess() {

    while (true) {
        getPlayerGuess = Number(prompt("Wanna bet, you can't guess the integer number between 1 and 100 i'm thinking about?.", ""));

        if (Number.isInteger(getPlayerGuess)) {
            return getPlayerGuess;
        } else {
            console.log("...Do you even know, what in tarnation is an integer?!!");
        }
    }
}

function checkGuess(generatedNumber, getPlayerGuess) {

    if (getPlayerGuess < generateRandomNumber) {
        console.log("If i were you, i would go even lower down to zero, at least you'd find something in common!!!");
    } else if (getPlayerGuess > generateRandomNumber) {
        console.log("Pfff! Not even close... But if it pleases you go higher, it's the only way you'll get higher somewhere, in your miserable life...");
    } else {
        console.log("...So, You hit the nail on the head?!! Wow! huh... I mean... BIG DEAL!!!");
    }
}


//function  game(){
for (let guessChances = 0; guessChances < 10; guessChances++) {
    getValidGuess();
    checkGuess(generatedNumber, getPlayerGuess);
}
//}