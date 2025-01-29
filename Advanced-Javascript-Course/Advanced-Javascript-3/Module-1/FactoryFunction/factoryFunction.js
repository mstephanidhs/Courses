// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++
//     }
// }

// Object Property Value Shorthand
// when the key and the variable are the same e.g. name or score
function gamer(name, score) {
  return {
    name,
    score,
    incrementScore() {
      this.score++;
    },
  };
}

const alice = gamer('Alice', 10);
const dave = gamer('Dave', 3);
const ash = gamer('Ash', 9);

alice.incrementScore();
dave.incrementScore();
ash.incrementScore();
dave.incrementScore();
ash.incrementScore();
console.log(alice);
console.log(dave);
console.log(ash);
