// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++
//     }
// }

function Gamer(name, score) {
  this.name = name;
  this.score = score;
  this.incrementScore = function() {
    this.score++;
  };
}

const dave = new Gamer('Dave', 0)
const sarah = new Gamer('Sarah', 2)
console.log(dave)
dave.incrementScore()
console.log(dave)
console.log(sarah)
sarah.incrementScore()
console.log(sarah)
