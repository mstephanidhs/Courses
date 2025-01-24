function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`)
}

console.log('What is the capital of Peru?')
/*
Challenge:
    1. After a 3 second delay, call the 'logAnswer' function.
    2. Make sure 'logAnswer' has all the info it needs.
       The answer is 'Lima' and it's 10 points for getting it right.
*/

const questionTimer = setTimeout(logAnswer, 3000, 'Lima', 10)

// cancel the timer is possible
// clearTimeout(questionTimer)