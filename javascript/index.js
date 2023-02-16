let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("../Music/ClickSound.wav");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("closeGameButton").style.display = "none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("closeGameButton").style.display = "block";
};

//New Game Logic
const startNewGame = () => {
    audio.play();
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("closeGameButton").style.display = "none";
    userNumberUpdate.setAttribute("disabled", true);
}

// reload the page
const newGameBegin = () => {
    window.location.reload();
}

const closeGame = () => {
    window.location.reload();
}

//Main Logic for game
const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("Guess").innerHTML = userGuess;

    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High";
            userNumberUpdate.value = "";
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low";
            userNumberUpdate.value = "";
        }
        else {
            userGuessUpdate.innerHTML = "It's  Correct";
            userNumberUpdate.value = "";
            startNewGame();
        }
        document.getElementById("attempts").innerHTML = userGuess.length;
    }
    else {

        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You loose!! the Game Computer Guess is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You loose!! the Game Computer Guess is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else {
            userGuessUpdate.innerHTML = "It's  Correct";
            userNumberUpdate.value = "";
            startNewGame();
        }
        document.getElementById("attempts").innerHTML = userGuess.length;
    }
};

const essayMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};
