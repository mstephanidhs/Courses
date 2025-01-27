/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
⚠️ Remember to handle all errors!
*/

try {
  const response = fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
    method: 'GET',
  });
  if (!response.ok) throw new Error('There was a problem with the API');
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
}

/*
Challenge:
1. Using the code snippet in the slide, add a body 
   property to the object we are passing with the 
   fetch request. I want you to create a new post 
   with the title “Holiday Nightmares” and the body 
   “When I was kidnapped in Scotland…” 
   
   In the console, you should see and object with an 
   ID, for example: {id: 101}
2. Add a headers object, setting the "Content-Type" to "application/json".
*/

try {
  const response = fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Holiday Nightmares',
      body: 'When I was kidnapped in Scotland...',
      userId: 101,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('There was a problem with the API');
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.log(err);
}

// Headers contain
// Extra (meta) info about the request
// Authentication
// The type of data being sent
// This is not an exhaustive list
