'use strict';

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
console.log(secretNumber);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(displayScore) {
    document.querySelector('.score').textContent = displayScore;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number((document.querySelector('.guess').value));
    console.log(guess, typeof guess);

    if(!guess) {
        // document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');
    }
    else if(guess > 20) {
        // document.querySelector('.message').textContent = 'Guess is too high! Guess a number between 1 - 20'
        displayMessage('Guess is too high! Guess a number between 1 - 20');
        score--;
        document.querySelector('.score').textContent = score;
    } 
    else if(guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct!';
        displayMessage('Correct!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    else if(guess !== secretNumber){
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
            displayMessage(guess > secretNumber ? 'Too high! Guess again' : 'Too low! Guess again');
            score--;
            // document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            // document.querySelector('.score').textContent = 'You lose the game';
            // document.querySelector('.score').textContent = 0;
            // document.querySelector('.score').textContent = score;
            displayScore('You lose the game');
            displayScore(0);
            displayScore(score);
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }
    }
 
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    console.log(secretNumber);
    // document.querySelector('.score').textContent = score;
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});