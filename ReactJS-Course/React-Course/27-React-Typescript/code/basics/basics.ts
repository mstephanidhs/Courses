////////////// Primitives: number, string, boolean //////////////
// lowercase: number, string NOT Number, String

let age: number;
// let age: number = 24;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

////////////// More complex types (arrays, objects) //////////////

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// using alias
type Person = {
  name: string;
  age: number;
};

// only objects with this kind of structure
let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

////////////// Type inference //////////////

// by default tries to infer as many types as possible, if immediately initialize the variable identifies the type
let course = "React - The Complete Guide";
// let course: string = "React - The Complete Guide"; // string is not needed

// an error occurs
// course = 12341;

////////////// Union Types //////////////
let course1: string | number = "React - The Complete Guide";
course1 = 12341; // now, it is allowed because of union types

////////////// Functions & types //////////////

// refers the type of the returned value
// function add(a: number, b: number): number {
function add(a: number, b: number) {
  return a + b;
}

// does not return anything, so it is a type of void
function printOutput(value: any) {
  console.log(value);
}

////////////// Generics //////////////

// using Generics so it knows the type based on the parameter given
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updateArray[0].split("");
