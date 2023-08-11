// use single interface to describe the shape of very different objects
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// too long type annotation
const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
printSummary(drink);
