const gamer = {
  name: 'Dave',
  score: 0,
  incrementScore: function () {
    this.score++;
  },
};

const gamer1 = {
  name: 'Sarah',
  score: 0,
  incrementScore: function () {
    this.score++;
  },
};

// in arrow function this keyword refers to the context surrounding the object (outer scope)
