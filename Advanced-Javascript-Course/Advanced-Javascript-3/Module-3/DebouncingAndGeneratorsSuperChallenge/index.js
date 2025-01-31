/*
When the page loads, this site should display the
'header', 'hero', and 'nav' sections only.

As a user scrolls, more content should be added.
There are ten content sections in total, which are
loading from apiData.js

The handleScroll function should be debounced to
limit the number of times a scroll event triggers it.

If no debounce time is passed in, it should default
to 100 milliseconds.
 
At the moment, the code is broken.

Challenge:
1. Identify and fix the bugs in this code.
*/

import { cafeDataArr } from '/apiData.js';

function* fetchDataGenerator(maxSections = 10) {
  let sectionCount = 0;
  while (true) {
    if (sectionCount >= maxSections) {
      console.log('Max section limit reached, stopping generator.');
      return;
    }
    const fakeApiResponse = { sectionText: cafeDataArr[sectionCount] };
    // Simulate an asynchronous API call with a promise
    yield new Promise((resolve) =>
      setTimeout(() => resolve(fakeApiResponse), 100)
    );
    sectionCount++;
  }
}

const generator = fetchDataGenerator();

function handleScroll() {
  const result = generator.next();
  if (!result.done) {
    result.value
      .then((data) => {
        // Process and display the data
        const contentSection = document.createElement('section');
        const sectionHeader = document.createElement('h3');
        const sectionTeaser = document.createElement('p');
        sectionHeader.innerText = data.sectionText.heading;
        sectionTeaser.innerText = data.sectionText.teaser;
        contentSection.appendChild(sectionHeader);
        contentSection.appendChild(sectionTeaser);
        document.body.appendChild(contentSection);
      })
      .catch((error) => {
        console.error('Failed to load section:', error);
      });
  } else {
    console.log('No more sections to load.');
  }
}

// Debouncing function
function debounce(func, timeout = 100) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, timeout);
  };
}

// Attach debounced handler to scroll event
document.addEventListener('scroll', debounce(handleScroll, 100));
