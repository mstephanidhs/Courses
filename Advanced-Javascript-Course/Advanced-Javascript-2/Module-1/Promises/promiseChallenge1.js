try {
  // the code we want to try to execute
} catch (error) {
  // the code to execute on an error
} finally {
  // code to execute at the end of the operation
}

async function getSuggestion() {
  try {
    // the code we want to try to execute
    const response = await fetch(
      'https://api.scrimba.com/dog.ceo/api/breeds/image/random'
    );
    if (!response.ok) {
      throw new Error('There was a problem with the API.');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    throw new Error('This is a network error');
    // the code to execute on an error
    // update the DOM to warn the user
    // access an alternative API
  } finally {
    // code to execute at the end of the operation
    console.log('The operation completed.');
  }
}
