"use strict";

/*
//1st part -> selects the element, 2nd part -> gets the actual content of it
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";
console.log(document.querySelector(".message").textContent); //the new content will be printed to the console

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //let keyword because it will be modified
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number";
    displayMessage("No number");

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347"; //it becomes an inline style, the .css file is not changed
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "Too high!" : "Too low!";
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "You lost the game!";
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //     else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too high!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     //when guess it too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too Low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
