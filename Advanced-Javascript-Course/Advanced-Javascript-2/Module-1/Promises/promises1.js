fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
    // update the DOM to warn the user
    // access an alternative API
  })
  .finally(() => console.log('The operation completed.'));
