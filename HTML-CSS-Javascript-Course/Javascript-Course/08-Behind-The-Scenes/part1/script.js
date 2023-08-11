"use strict";

/*
High-level -> doesn't have to worry, everything happens automatically

in comparison to Low-level -> manually manages resources (hardware, malloc memory)

Garbage-collected -> cleaning the memory so we don't have to (if objects exists that are not used for a while)

Multi-paradigm -> an approach and mindset of structuring code, which will direct your coding style and technique (Procedural -> organizing the code in a linear way and some functions in between, OOP, Functional programming - FP)

Prototype-based object-oriented -> a prototype that contains all the functions basically (e.i. the functions that an array has)

first-class functions -> functions are treated like regular variables (pass them into other functions, and return them from functions)

Dynamic -> no data type definitions (types becomes known at runtime, data type of variable is automatically changed)

Concurrency model -> javascript engine handles multiple tasks happening at the same time, javascript runs in one single thread, so it can only do one thing at a time

event loop -> takes long running tasks, executes them in the background and puts them back in the main thread once they are finished
*/

/*
JS ENGINE -> program that executes javascript code, contains a call stack (where our code is executed - execution context) and heap (where objects are stored, object in memory)

compilation vs interpretation, js uses a combination of both (Just-in-time compilation), entire code is converted into machine code at once, then executed immediately*
1st -> entire resource code is transformed into machine code at once and is then written to a portable file so it can be executed in every pc anytime
2nd -> runs through the source code and executes it line by line (much slower than compiled languages)

*parsing -> compilation (just-in-time compilation) -> execution (happens in call stack), during execution happens optimization (goes back to compilation and then again to execution etc, happens in special threads that we can't access from code)
*/

/*
WEB APIs -> functionalities provided to the engine, accessible on window object
node.js -> used because we don't have a server so we don't have access to the WEB APIs
*/

/*
global execution context (how matter how big the code is, there is only one of it) -> environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed
one execution context per function -> for each function call, a new execution context is created (all together make the call stack)

inside of the execution context -> variable environment (let, const, var declarations, functions, arguments object, scope chain, this keyword  (!!!not in arrow functions) -> all of these are generated during "creation phase", right before execution) 

only when the program is really finished, the global execution gets removed from the call stack
*/

/*
scoping -> how our program's variable are organized and accessed. 

lexical scoping -> scoping is controlled by placement of functions and blocks in the code

scope (!= scope of a variable) -> space or environment in which a certain variable is declared, there is global scope, function scope and block scope

scope of a variable -> entire region of our code where a certain variable can be accessed

global scope -> outside of any function or block, variables declared in global scope are accessible everywhere

function scope -> variables are accessible only inside function, NOT outside, also called local scope

reference error -> cannot find the specific variable (local variable most likely)

block scope -> variable are accessible only inside block (everything that is in curly braces). HOWEVER, this only applies to let and const variables (are restricted to the block they are initiallized), functions are also block scoped

*every scope has access to variables from all outer scopes (only can look up but not down)
 */

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName); //it's a global variable, so it will be available in this function

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reassigning outer scope's variable
      output = "NEW OUTPUT";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str); //it will print steven, because it will first search for the variable name in the current scope and if there isn't, then it will perform variable lookup

      function add(a, b) {
        return a + b;
      }

      console.log(output);
    }
    // console.log(str); //ReferenceError -> because of variable scope (block scope)
    console.log(millenial); //it will be printed, because it's a var type (fuction scoped)
    // add(2, 3); // block scoped for strict mode only
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);
// console.log(age); //can't access it because of scope
// printAge(); //exactly as the above

/*
Hoisting -> makes some types of variables accessible/usabe in the code before they are actually declared. "Variables lifted to the top of their scope"
Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object

TDZ -> temporal dead zone, can't access the variable before it's declared
*/
