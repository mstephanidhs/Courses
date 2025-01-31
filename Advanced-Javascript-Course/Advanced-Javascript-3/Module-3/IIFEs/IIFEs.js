// An IIFE (Immediately Invoked Function Expression) is an
// idiom in which a JavaScript function runs as soon as it is
// defined. It is also known as a self-executing anonymous
// function.
(function () {
  const theme = localStorage.getItem('theme');
  if (theme) {
    console.log(theme);
  } else {
    console.log('light');
  }
})();

/* Challenge:
    1. Convert this function to an IIFE.
       You will need to figure out how to make 
       it async and how to pass in parameters.
*/

// async function displayWeather(country) {
//   const weather = await fetch('/geo.json');
//   const weatherObj = await weather.json();
//   console.log(`The weather in the ${country} today is ${weatherObj[country]}`);
// }

(async function (country) {
  const weather = await fetch('/geo.json');
  const weatherObj = await weather.json();
  console.log(`The weather in the ${country} today is ${weatherObj[country]}`);
})('UK');
