class Holiday {
  // private field
  #destination;
  constructor(destination, price) {
    this.#destination = destination;
    this.price = price;
  }
}

const safari = new Holiday('Kenya', 1000);
console.log(safari);
