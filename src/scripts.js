const wait = () => new Promise(resolve => setTimeout(resolve, 0))


function generateRandomNumber() {
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    return randomNumber
}


// let generatedNumber = generateRandomNumber;

//For testing purposes only
// console.log("Generated Number:", generatedNumber);

// function getValidGuess() {

//     while (true) {
//         let playerInput = prompt(
//             "You can't guess the integer number between 1 and 100 i'm thinking about!", " "
//         );

//         if (playerInput === null) {
//             return null;
//         }
//         if (/^\d+$/.test(playerInput.trim())) {
//             let playerGuess = parseInt(playerInput, 10);

//             if (playerGuess >= 1 && playerGuess <= 100) {
//                 return playerGuess;
//             } else {
//                 console.log("...Do you even know, what in tarnation is an integer?!!");
//             }
//         }
//     }
// }

function getPlayerGuess() {
    // const generatedNumber = generateRandomNumber();
    // console.log("test");
    // console.log(generatedNumber);

    while (true) {
        let playerGuess = prompt("Guess a random number between 1 and 100");

        // checkGuess(generatedNumber, playerGuess);

        // else if  (/^\d+$/.test(playerGuess.trim())) {
        //     console.log("Enter valid character");
        // }
        if (playerGuess === null || playerGuess.trim() === "") {
            console.log("Write something!!!!");
            continue;
        }
        const number = parseInt(playerGuess, 10);
        if (isNaN(number) || playerGuess.trim() !== number.toString()) {
            console.log("Please enter a valid integer.");
            continue;
        }
        else {
            console.log(number);
            return number;
        }

        //     else if (number > 100 || number < 1){
        //         console.log("Choose a number between 1 and 100 not higher or lower");
        //     }
        //     else if (number > generatedNumber) {
        //         console.log("If i were you, i would go even lower down to zero, at least you'd find something in common!!!");
        //    }else if (number < generatedNumber) {
        //         console.log("Pfff! Not even close... But if it pleases you go higher, it's the only way you'll get higher somewhere, in your miserable life...");
        //     } else if(number === generatedNumber) {
        //         console.log("...So, You hit the nail on the head?!! Wow! huh... I mean... BIG DEAL!!!");
        //         break;
        //     }

    }
}
function checkGuess(playerGuess, randomNumber) {

    if (playerGuess > randomNumber) {
        console.log("Not even close... But if it pleases you, go higher! It's the only way you'll get higher somewhere, in your miserable life...");
    } else if (playerGuess < randomNumber) {
        console.log("If i were you, i would go even lower. Down to zero! At least you'd find something in common!!!");
    } else {
        console.log("...So, You hit the nail on the head?!! Wow! huh... I mean... BIG DEAL!!!");
    }
}



async function game() {
    //score system
    let score = 100;



    const randomNumber = generateRandomNumber()
    const wait = () => new Promise(resolve => setTimeout(resolve, 0))
    console.log("random", randomNumber)
    for (i = 0; i < 10; i++) {
        await wait()
        console.log(`Round : ${i + 1}`)
        //    const playerGuess = getPlayerGuess();
        const playerChoice = getPlayerGuess()
        checkGuess(playerChoice, randomNumber)
        if (playerChoice === randomNumber) {
            console.log(`Final score: ${score}`);
            break;
        } else {
            score = score - 10;
            console.log(`current score: ${score}`);
        }
    }
    if (score > 50) {
        console.log("...Huh, You... Won?!! INCONCEIVABLE!!! ...Go ahead rejoice... Pat youself on the back, while you're at it...Humpf! It's just luck anyway...");
    } else if (score < 50) {
        console.log("Oh no! The human lost...Awwww... Psyke! Said no one ever!!! Tell me, how does it feel to be a loser? No different, than how you feel 24/7, right? RIGHT?!!");
    }
    // console.log(randomNumber)
}

game()