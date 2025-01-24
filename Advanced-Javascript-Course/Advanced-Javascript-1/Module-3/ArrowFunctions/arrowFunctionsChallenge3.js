const itemsBoughtArr = [
  {
    name: 'Electric Toothbrush Holder',
    priceUSD: 40,
    desc: 'A robotic arm that holds and moves your electric toothbrush for you, ensuring optimal brushing technique.',
  },

  {
    name: 'Invisible Milk',
    priceUSD: 10,
    desc: 'A carton of milk that turns completely transparent when poured into a glass, providing a magical and mysterious drinking experience.',
  },
  {
    name: 'Self-Chilling Soup Can',
    priceUSD: 15,
    desc: 'A can of soup that instantly chills itself when opened, so you can enjoy a refreshing cold soup on a hot summer day.',
  },
  {
    name: 'Glow-in-the-Dark Eggs',
    priceUSD: 8,
    desc: 'A carton of eggs that glow in the dark, making breakfast preparation an exciting and illuminating experience.',
  },
];

function calculateTotalCost(itemsBoughtArr, discount = 0) {
  /*
    Challenge:
    1. Use the reduce method to calculate the total
       cost of items which have been bought.
    */
//   if (!discount) discount = 0;
  const total = itemsBoughtArr.reduce(
    (acc, currEl) => acc + currEl.priceUSD,
    0
  );
  return total - discount;
}

console.log(calculateTotalCost(itemsBoughtArr, 20));
