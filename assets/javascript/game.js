// DOM Elements
var winsDOM = document.getElementById('wins');
var lossesDOM = document.getElementById('losses');
var computerGuessDOM = document.getElementById('computerGuess');
var userGuessDOM = document.getElementById('userGuess');
var remainingDOM = document.getElementById('remaining');

var wins = 0;
var losses = 0;
var remaining = 9;
var str = "abcdefghijklmnopqrstuvwxyz";
var computerChoices = str.split("");
var computerGuess
var round = 0;

var gameInit = function () {
    computerGuessDOM.textContent = '';
    round++;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    confirm('ready to play round ' + round + '?');
    remaining = 9;
    remainingDOM.textContent = remaining;
    userGuessDOM.innerText = '';
    console.log('shhh... the computer guessed ' + computerGuess);
}

gameInit();

if (gameInit) {

    document.onkeyup = function (event) {

        var userGuess = event.key;
        userGuessDOM.insertAdjacentText('beforeend', userGuess + ', ');
        console.log(userGuess);

        if (userGuess === computerGuess) {
            alert('You guessed correctly!')
            wins++;
            winsDOM.textContent = wins;
            gameInit();
        } else {
            remaining--;
            remainingDOM.textContent = remaining;
            console.log('try again ' + remaining + ' guesses remaining');
        }

        if (remaining === 0) {
            alert('you\'re out of guesses. the answer was ' + computerGuess);
            computerGuessDOM.textContent = computerGuess;
            losses++;
            lossesDOM.textContent = losses;
            gameInit();
        }
    }
};

