// Object.assign()
// Copies properties from a source object to a target object
// Returns the new version of the target object

// shallow copy
// const studentDetails = {
//   firstName: 'janaka',
//   lastName: 'siriwardena',
//   age: 28,
//   country: 'sri lanka',
//   email: 'j.siri@totalinternet.com',
//   discordUsername: 'JS1',
// };

// const studentDetailsCopy = {};

// Object.assign(studentDetailsCopy, studentDetails);

// console.log(studentDetailsCopy);

// deep copy
const studentDetails = {
  firstName: 'janaka',
  lastName: 'siriwardena',
  age: 28,
  country: 'sri lanka',
  email: 'j.siri@totalinternet.com',
  discordUsername: 'JS1',
  modulesCompleted: ['html', 'js', 'css'],
};

const deepClonedStudentDetails = structuredClone(studentDetails);
deepClonedStudentDetails.modulesCompleted[0] = 'TS';
console.log(studentDetails);
console.log(deepClonedStudentDetails);

// {firstName: "janaka", lastName: "siriwardena", age: 28, country: "sri lanka", email: "j.siri@totalinternet.com", discordUsername: "JS1", modulesCompleted: ["html", "js", "css"]}
// {firstName: "janaka", lastName: "siriwardena", age: 28, country: "sri lanka", email: "j.siri@totalinternet.com", discordUsername: "JS1", modulesCompleted: ["TS", "js", "css"]}
