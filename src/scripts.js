const wait = () => new Promise(resolve => setTimeout(resolve, 0))


function generateRandomNumber() {
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    return randomNumber
}

function showWelcomeMessage() {
    alert(
        "Welcome to the Number Guessing Game!\n\n" +
        "The EVIL AI has chosen a number between 1 and 100.\n" +
        "You have 10 attempts to guess it.\n\n" +
        "Your score starts at 100 and decreases after each wrong guess.\n\n" +
        "This game is played through prompts, but the results are shown in the console.\n" +
        "Open the console with F12 or Ctrl + Shift + J, then press OK to start."
    );
}

function getPlayerGuess() {

    while (true) {
        let playerGuess = prompt("Guess a random number between 1 and 100\n\n" +
            "Or press 'cancel' to quit the game"
        );

       if (playerGuess === null) {
        const wantsToQuit = confirm("Are you sure you want to quit the game?");

            if (wantsToQuit) {
                return null;
            }

            continue;
        }

        if (playerGuess.trim() === "") {
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
        return "Not even close... But if it pleases you go higher, it's the only way you'll get higher somewhere, in your miserable life..."
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

        if (playerChoice === null) {
            console.log("Game closed. The EVIL AI will wait for your next failure.\n\n"+
                "refresh the page to start a new game");
            return;
        }

        const resultMessage = checkGuess(playerChoice, randomNumber)
        
        console.log(`Your guess: ${playerChoice}`);
        console.log(resultMessage)

        if (playerChoice === randomNumber) {
            console.log(`Final score: ${score}`);
            console.log(`Attempts : ${i + 1}`)
            console.log("...Huh, You... Won?!! INCONCEIVABLE!!! ...Go ahead rejoice... Pat yourself on the back, while you're at it...Humpf! It's just luck anyway...\n\n"+"refresh the page to start a new game");

            hasWon = true
            break;
        } else {
            score = score - 10;         
            console.log(`current score: ${score}`);
        }
    }
    if(!hasWon){
        console.log(`Attempts: ${maxAttempts}`);
        console.log("Oh no! The human lost...Awwww... Psych! Said no one ever!!! Tell me, how does it feel to be a loser? No different, than how you feel 24/7, right? RIGHT?!!\n\n"+"refresh the page to start a new game")
    }
}

showWelcomeMessage()
game()