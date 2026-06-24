const wait = () => new Promise(resolve => setTimeout(resolve, 0))


function generateRandomNumber() {
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    return randomNumber
}

function getPlayerGuess() {

    while (true) {
        let playerGuess = prompt("Guess a random number between 1 and 100");

        if (playerGuess === null || playerGuess.trim() === "") {
            console.log("Write something!!!!");
            continue;
        }
        const number = parseInt(playerGuess, 10);
        if (isNaN(number) || playerGuess.trim() !== number.toString()) {
            console.log("Please enter a valid integer.");
            continue;
        }
        if (number < 1 || number > 100) {
        console.log("Choose a number between 1 and 100.");
        continue;
         }

        return number;

    }
}
function checkGuess(playerGuess, randomNumber) {

    if (playerGuess > randomNumber) {
        return "If i were you, i would go even lower down to zero, at least you'd find something in common!!!"
    } else if (playerGuess < randomNumber) {
       return "Pfff! Not even close... But if it pleases you go higher, it's the only way you'll get higher somewhere, in your miserable life..."
    } else {
        return "...So, You hit the nail on the head?!! Wow! huh... I mean... BIG DEAL!!!"
    }
}



async function game() {
    const maxAttempts = 10;
    let score = 100;
    let hasWon = false;

    const randomNumber = generateRandomNumber()
  
    for (let i = 0; i < maxAttempts; i++) {
        await wait()
        console.log(`Round : ${i + 1}`)
   
        const playerChoice = getPlayerGuess()
        const resultMessage = checkGuess(playerChoice, randomNumber)
        console.log(`Your guess: ${playerChoice}`);
        console.log(resultMessage)

        if (playerChoice === randomNumber) {
            console.log(`Final score: ${score}`);
            console.log(`Attempts : ${i + 1}`)
            console.log("...Humpf! It's just luck...\n\n"+"refresh the page to start a new game");

            hasWon = true
            break;
        } else {
            score = score - 10;         
            console.log(`current score: ${score}`);
        }
    }
    if(!hasWon){
        console.log(`Attempts: ${maxAttempts}`);
        console.log("YOU DIED --Dark Souls sounds on the background--\n\n"+"refresh the page to start a new game")
    }
}

game()