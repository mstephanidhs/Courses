'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do when it occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let maxValue = temps[0];
  let minValue = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof temps[i] !== 'number') continue;

    if (maxValue < curTemp) maxValue = curTemp;
    if (minValue > curTemp) minValue = curTemp;
  }

  console.log(maxValue, minValue);
  return maxValue - minValue;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement the same functionality twice? NO! Just merge the two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let maxValue = temps[0];
  let minValue = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof temps[i] !== 'number') continue;

    if (maxValue < curTemp) maxValue = curTemp;
    if (minValue > curTemp) minValue = curTemp;
  }

  console.log(maxValue, minValue);
  return maxValue - minValue;
};

//-------------------------------------------------------

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degree celsius:')),
  };

  // B) FIND
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY BUG
console.log(measureKelvin());

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start of string
*/

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = (temps) => {
  let str = ``;
  for (let i = 0; i < temps.length; i++) {
    str = str + `${temps[i]}ºC in ${i + 1} ... `;
  }

  console.log(`... ${str}`);
};

printForecast(temps1);
