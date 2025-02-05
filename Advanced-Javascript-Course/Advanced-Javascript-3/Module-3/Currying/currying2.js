// Partial application
const calculateVolume = (length) => (width) => (height) =>
  length * width * height;

const calculateBaseAreaVolume = calculateVolume(2)(3);

const totalVolume1 = calculateBaseAreaVolume(4);
const totalVolume2 = calculateBaseAreaVolume(6);
const totalVolume3 = calculateBaseAreaVolume(10);

console.log(totalVolume1);
console.log(totalVolume2);
console.log(totalVolume3);
