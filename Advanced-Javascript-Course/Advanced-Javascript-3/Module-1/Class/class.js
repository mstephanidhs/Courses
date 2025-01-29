class Gamer {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  incrementScore() {
    this.score++;
  }
}

const dave = new Gamer('Dave', 0);
const sarah = new Gamer('Sarah', 0);
dave.incrementScore();
console.log(dave);
console.log(sarah);
