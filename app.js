'use strict';

const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore');

let scoreValue = 20;
let highScore = 0;
let num = randomNumber();

function updateHighScore() {
  if (scoreValue > highScore) {
    highScore = scoreValue;
    highScoreDisplay.textContent = highScore;
  }
}

checkBtn.addEventListener('click', () => {
  const guessValue = Number(guess.value);

  if (!guessValue) {
    message.textContent = '⛔ No Number';
  } else if (guessValue > num) {
    message.textContent = '⬆️ Too High';
    --scoreValue;
  } else if (guessValue < num) {
    message.textContent = '⬇️ Too low';
    --scoreValue;
  } else if (guessValue === num) {
    message.textContent = '🎉 Correct Number';
    number.textContent = num;
    updateHighScore();
    guess.disabled = true;
  }

  score.textContent = scoreValue;
});

againBtn.addEventListener('click', () => {
  message.textContent = 'Start Guessing...';
  scoreValue = 20;
  score.textContent = scoreValue;
  guess.disabled = false;
  guess.value = '';
  number.textContent = '?';
  num = randomNumber();
});

function randomNumber() {
  let num = Math.floor(Math.random() * 20) + 1;
  return num;
}
