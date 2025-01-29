const user1 = {
  username: 'rpchan',
  subscriptionLevel: 'bronze',
};

const user2 = {
  username: 'bcstevens',
  subscriptionLevel: 'silver',
  accessPremiumFeature: true,
};

// with that the user3.hasOwnProperty won't work
// because we declared it a pure object, it has not method
// that's why the Object.hasOwn is better, it protects from
// some edge cases
const user3 = Object.create(null);

// console.log(user1.hasOwnProperty('accessPremiumFeature'));
console.log(Object.hasOwn(user1, 'accessPremiumFeature'));

function canAccessPremiumFeature(userObj, prop) {
  /*
  Challenge:
  1. Write logic to check if the object has the property. 
     Do this challenge twice, once with hasOwn and once 
     with hasOwnProperty. All the function need do is return
     a boolean. 
     Bonus: use short circuiting to only return true if 
     'accessPremiumFeature' both exists AND is true.
  */
  // return userObj.hasOwnProperty(prop) && userObj[prop]
  return Object.hasOwn(userObj, prop) && userObj[prop];
}

console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'));
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature'));
