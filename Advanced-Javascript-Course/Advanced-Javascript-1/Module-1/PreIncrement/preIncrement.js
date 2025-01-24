let currentTicketNumber = 1

function getNextTicketNumber() {
  return currentTicketNumber++
}

// Simulating guests arriving and receiving ticket numbers
console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`)
console.log(`Guest 2, your ticket number is: ${getNextTicketNumber()}`)
console.log(`Guest 3, your ticket number is: ${getNextTicketNumber()}`)

// The pre-increment operator increments the variable's value before the result of the increment is used in an expression
// The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.