function displayPolitician(currentSituation) {
  //   console.log(this);
  console.log(
    `${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`
  );
}

const politician1 = {
  name: 'Carly Fowler',
  age: 40,
};

const politician2 = {
  name: 'Dave Bland',
  age: 55,
};

// the value of this in a function is undefined when strict mode is enabled otherwise it's the window object
// 1st paramter: the object that we want the this keyword to be bind
displayPolitician.call(politician1, 'In jail for corruption');
displayPolitician.call(politician2, 'Resigned due to incompetence');

// apply takes an array of arguments, very similar to call
// they are automatically destructed
displayPolitician.apply(politician1, ['In jail for corruption'])



// With the call() method, you can write a method that can be used on different objects.
