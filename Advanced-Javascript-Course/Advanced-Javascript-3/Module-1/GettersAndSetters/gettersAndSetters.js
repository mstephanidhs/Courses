class Holiday {
  #destination;
  constructor(destination, price) {
    this.#destination = destination;
    this.price = price;
  }

  get destination() {
    // check if user is logged in
    return this.#destination;
  }

  set destination(newDestination) {
    if (typeof newDestination !== 'string' || newDestination.length <= 0)
      throw new Error('Destination not valid');

    this.#destination = newDestination;
  }
}
const safari = new Holiday('Kenya', 1000)
safari.destination = []
console.log(safari.destination)
