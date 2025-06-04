'use strict';

const answer = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnAgin = document.querySelector('.again');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let actualScore = 20;

btnCheck.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  guessInput.focus();
  if (!guess) {
    message.textContent = `⛔ No number!`;
  } else if (guess === secretNumber) {
    message.textContent = `🎉 congratiolation you win!`;
    answer.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    highScore.textContent = score.textContent;
  } else if (guess > secretNumber) {
    if (actualScore > 1) {
      message.textContent = `📈 Too high!`;
      actualScore--;
      score.textContent = actualScore;
    } else {
      message.textContent = `💥 You lost the game!`;
    }
  } else if (guess < secretNumber) {
    if (actualScore > 1) {
      message.textContent = `📉 Too low!`;
      actualScore--;
      score.textContent = actualScore;
    } else {
      message.textContent = `💥 You lost the game!`;
    }
  }

  guessInput.value = '';
  console.log(numScore);
});

console.log(secretNumber);
