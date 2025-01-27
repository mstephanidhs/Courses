/*
Challenge:
    1. Make a fetch request to the "Bored" API:
         Base URL: https://apis.scrimba.com/bored/api
         Endpoint: /activity
    2. Log an object containing an activity suggestion
       to the console.
    🛟 hint.md for help!
*/

fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
  .then(data => console.log(data.activity))