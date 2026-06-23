let generateRandomNumber = Math.floor((Math.random() * 100) + 1);
let generatedNumber = generateRandomNumber;

//For testing purposes only
console.log("Generated Number:", generatedNumber);

function getValidGuess() {

    while (true) {
        let playerInput = prompt(
            "You can't guess the integer number between 1 and 100 i'm thinking about!", " "
        );

        if (playerInput === null) {
            return null;
        }
        if (/^\d+$/.test(playerInput.trim())) {
            let playerGuess = parseInt(playerInput, 10);

            if (playerGuess >= 1 && playerGuess <= 100) {
                return playerGuess;
            }else{
                console.log("...Do you even know, what in tarnation is an integer?!!");
            }
        }
    }
}

function checkGuess(generatedNumber, playerGuess) {

    if (playerGuess < generateRandomNumber) {
        console.log("If i were you, i would go even lower down to zero, at least you'd find something in common!!!");
    } else if (playerGuess > generateRandomNumber) {
        console.log("Pfff! Not even close... But if it pleases you go higher, it's the only way you'll get higher somewhere, in your miserable life...");
    } else {
        console.log("...So, You hit the nail on the head?!! Wow! huh... I mean... BIG DEAL!!!");
    }
}


//function  game(){
for (let guessChances = 0; guessChances < 10; guessChances++) {
    let playerGuess = getValidGuess();
    checkGuess(generatedNumber, playerGuess);
}
//}