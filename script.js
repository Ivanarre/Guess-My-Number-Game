'use strict';

const answer = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnAgin = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let actualScore = 20;
let actualHighScore = 0;

const changeBgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

btnCheck.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  guessInput.focus();
  if (!guess) {
    message.textContent = `⛔ No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    message.textContent = `🎉 congratiolation you win!`;
    answer.textContent = secretNumber;
    changeBgColor('#60b347');
    answer.style.width = '30rem';
    if (actualScore > actualHighScore) {
      actualHighScore = actualScore;
      highScore.textContent = actualHighScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (actualScore > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      actualScore--;
      score.textContent = actualScore;
    } else {
      message.textContent = `💥 You lost the game!`;
      score.textContent = 0;
    }
  }

  guessInput.value = '';
  console.log(numScore);
});

btnAgin.addEventListener('click', () => {
  const initialScore = 20;
  const initialNumber = '?';
  changeBgColor('#222');
  answer.style.width = '15rem';
  score.textContent = initialScore;
  message.textContent = 'Start guessing...';
  answer.textContent = initialNumber;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

alert(secretNumber);
