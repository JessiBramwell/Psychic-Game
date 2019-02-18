// DOM Elements
var winsDOM = document.getElementById('wins');
var lossesDOM = document.getElementById('losses');
var computerGuessDOM = document.getElementById('computerGuess');
var userGuessDOM = document.getElementById('userGuess');
var remainingDOM = document.getElementById('remaining');
var winBlocDOM = document.getElementById('win-bloc-guess');

var wins = 0;
var losses = 0;
var remaining = 9;
var str = "abcdefghijklmnopqrstuvwxyz";
var keys = str.split("");
var computerGuess
var round = 0;


//visual cues for wins, losses, and quesses
//don't allow user to guess same letter twice
//alert to repeate letter guess
//visual hints

hide('game');
var gameInit = function () {
    show('game');
    show('stats-bloc');
    hide('start');
    hide('win-bloc');
    hide('loss-bloc');
    computerGuessDOM.textContent = '';
    round++;
    computerGuess = keys[Math.floor(Math.random() * keys.length)];
    remaining = 9;
    remainingDOM.textContent = remaining;
    userGuessDOM.textContent = '';
    console.log('shhh... the computer guessed ' + computerGuess);
}

function show(show) {
    var show = document.getElementById(show);
    show.style.display = "block";
}

function hide(hide) {
    var hide = document.getElementById(hide);
    hide.style.display = 'none';
}

if (gameInit) {

    document.onkeyup = function (event) {

        var userGuess = event.key;

        if (keys.indexOf(userGuess) !== -1) {

            userGuessDOM.insertAdjacentText('beforeend', userGuess + ', ');
            console.log(userGuess);

            if (userGuess === computerGuess) {
                winBlocDOM.textContent = userGuess;
                wins++;
                winsDOM.textContent = wins;
                show('win-bloc');
                hide('stats-bloc');
            } else {
                remaining--;
                remainingDOM.textContent = remaining;
            }

            if (remaining === 0) {
                computerGuessDOM.textContent = computerGuess;
                hide('stats-bloc');
                show('loss-bloc');
                losses++;
                lossesDOM.textContent = losses;
            }
        }
    }

};

