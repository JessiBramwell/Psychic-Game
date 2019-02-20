// DOM Elements
var gameDOM = document.getElementById('game');
var winsDOM = document.getElementById('wins');
var lossesDOM = document.getElementById('losses');
var computerGuessDOM = document.getElementById('computer-guess');
var userGuessDOM = document.getElementById('userGuess');
var remainingDOM = document.getElementById('remaining');
var updateDOM = document.getElementById('update-text');
var winBlocDOM = document.getElementById('win-bloc-guess');

var wins = 0;
var losses = 0;
var remaining = 9;
var round = 0;
var str = "abcdefghijklmnopqrstuvwxyz";
var keys = str.split("");
var computerGuess
var userGuessArr = [];



//visual cues for wins, losses, and quesses
//don't allow user to guess same letter twice
//alert to repeate letter guess
//visual hints


function gameInit() {
    show('game');
    show('stats');
    hide('start');
    hide('update');
    computerGuessDOM.textContent = '';
    computerGuess = keys[Math.floor(Math.random() * keys.length)];
    round++;
    remaining = 9;
    userGuessArr = [];
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

hide('game');

if (gameInit) {

    document.onkeyup = function (event) {

        var userGuess = event.key;

        if (keys.indexOf(userGuess) !== -1) {

            if (!userGuessArr.includes(userGuess)) {

                userGuessArr.push(userGuess);
                userGuessDOM.insertAdjacentText('beforeend', userGuess + ', ');

                if (userGuess === computerGuess) {
                    wins++;
                    winsDOM.textContent = wins;
                    updateDOM.textContent = ' You guessed it! The letter was ' + computerGuess;
                    show('update');
                    hide('stats');
                } else {
                    remaining--;
                    remainingDOM.textContent = remaining;
                }

                if (remaining === 0) {
                    computerGuessDOM.textContent = computerGuess;
                    hide('stats');
                    updateDOM.textContent = 'Sorry, the computer was thinking ' + computerGuess + '.';
                    show('update');
                    losses++;
                    lossesDOM.textContent = losses;
                }
            } else {
                console.log('you guessed that already');
                gameDOM.classList.add('shake');

                document.addEventListener("animationend", function (event) {
                    gameDOM.classList.remove("shake");
                });

            }
        }
    }

};

