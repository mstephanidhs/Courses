const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
// it's a brand new type
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// reasons why tupel is not particularly useful
// really hard to represent meaningful data
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
