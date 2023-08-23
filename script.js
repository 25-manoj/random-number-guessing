// random value  //
let random = Math.trunc(Math.random() * 20) + 1;

// score value //
let score = 20;

// high score //
let highScore = 0;

// Game logic //
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when null input //
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  }
  // when player won //
  else if (guess === random) {
    document.querySelector('.number').textContent = random;
    document.querySelector('.message').textContent = 'You won';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // guessed wrong number //
  else if (guess !== random) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > random ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the match';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// play again button //
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
