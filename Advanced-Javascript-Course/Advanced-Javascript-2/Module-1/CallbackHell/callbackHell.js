/* 
Challenge:
1. Try to invoke these functions so they run in sequence. 
   The callback function passed to the final function (notifyUser) 
   can just be an anonymous function that logs 'All steps completed!'
   
   You will come up against a gotcha here! 
   hint.md is here to help!
*/

// expected output:

// Step 1: Uploading file...
// Step 2: Processing file...
// Step 3: Notifying user...
// All steps completed!

// upload a file
function uploadFile(callback) {
  console.log('Step 1: Uploading file...');
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}
// process a file
function processFile(callback) {
  console.log('Step 2: Processing file...');
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}
// notify a user
function notifyUser(callback) {
  console.log('Step 3: Notifying user...');
  setTimeout(() => {
    callback(); // call next function
  }, 1000);
}

// pyramid of doom
uploadFile(() => {
  processFile(() => {
    notifyUser(() => console.log('All steps completed'));
  });
});

//-----------------------------------------------------------------------------
// Solution to this callback hell

/* 
Challenge:
1. Await these promises in order in a try/catch block and 
   when they are done, log 'All steps completed!'.
*/

function uploadFile() {
  return new Promise((resolve, reject) => {
    console.log('Step 1: Uploading file...');
    setTimeout(() => {
      resolve(); // Call the next step after 1 second
    }, 1000);
  });
}

function processFile() {
  return new Promise((resolve, reject) => {
    console.log('Step 2: Processing file...');
    setTimeout(() => {
      resolve(); // Call the next step after 1 second
    }, 1000);
  });
}

function notifyUser() {
  return new Promise((resolve, reject) => {
    console.log('Step 3: Notifying user...');
    setTimeout(() => {
      resolve(); // Call the next step after 1 second
    }, 1000);
  });
}

try {
  await uploadFile();
  await processFile();
  await notifyUser();
  console.log('All steps completed!');
} catch (error) {
  console.log(error);
}
