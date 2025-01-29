const lunchMenu = [
  'Greek Salad',
  'Open Sandwich',
  'Parsnip Soup',
  'Flatbread and Dip',
];
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry'];
const sweetMenu = [
  ['Mixed Berry Ice Cream', 'Chocolate'],
  'Chocolate Brownie',
  'Orange Cheesecake',
];

console.log(...lunchMenu);
// Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"\

console.log(lunchMenu);
// ["Greek Salad", "Open Sandwich", "Parsnip Soup", "Flatbread and Dip"]

// it's a shallow copy, since it does change the nested array
const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu];
eventMenu[8][0] = 'Tutti Frutti'
console.log(eventMenu);

// also shallow copy
// 1st level of nesting works but not with the 2nd level (e.g. salad1.ingredients)
const salad1 = {
  name: 'green',
  ingredients: ['lettuce', 'tomato'],
};
const salad2 = { ...salad1 };
salad2.name = 'Greek';
salad2.ingredients[0] = 'Cucumber';
console.log(salad1);
console.log(salad2);
