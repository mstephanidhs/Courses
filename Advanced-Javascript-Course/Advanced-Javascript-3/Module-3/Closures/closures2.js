/*
Challenge:
   1. Add two more functions to this object. One to increment 
      the score and one to decrement the score. Call those functions a couple of times for each player and then call displayScore to check it’s working. 
*/
function scorePoint(playerName) {
  let score = 0;
  return {
    displayScore: function () {
      console.log(`${playerName} has ${score} points`);
    },
    incrementScore: function () {
      score++;
    },
    decrementScore: function () {
      score--;
    },
  };
}

const player1 = scorePoint('Vicky');
const player2 = scorePoint('Leo');

player2.incrementScore();
player2.incrementScore();
player2.decrementScore();
player1.incrementScore();
player2.decrementScore();
player1.incrementScore();

player1.displayScore();
player2.displayScore();
