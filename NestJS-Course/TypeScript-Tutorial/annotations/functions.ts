const add = (a: number, b: number): number => {
  return a + b;
  // return 'adasdas' -> checks that the function is supposed to return a number
};

const substract = (a: number, b: number): number => {
  return a - b;
};

// name function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// can return null or undefined
const logger = (message: string): void => {
  console.log(message);
};

// never: never going actually to reach the end of the function
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// ES2015
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// };

logWeather(todaysWeather);
