// Challenge:
// 1. Predict what will be logged to the console.

function getWeather() {
    return "Today's weather is warm and sunny"
}

console.log(getWeather()) // What will this log?

console.log(getNews()) // What will this log?

function getNews() {
    return "A new swimming pool has opened in the town centre..."
}

console.log(trafficInfo) // What will this log?

let trafficInfo = 'All roads are busy right now'

// Hoisting -> Variable and function declarations are moved to the top of their containing scope
// during the compilation phase, before code execution

// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared: