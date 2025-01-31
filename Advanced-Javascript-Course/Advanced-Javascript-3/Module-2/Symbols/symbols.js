const userName = Symbol('user name');

const user = {
  name: 'Benny',
};

user[userName] = 'Benny67';

// It does no appear in the iteration
for (let prop in user) console.log(prop);

// Same
console.log(Object.keys(user));

// Same
console.log(JSON.stringify(user));

// Now we can see it
console.log(user[userName])
