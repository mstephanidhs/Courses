/*
Challenge:
1. Return a new promise. The promise should:
    - create a new image and assign the incoming url 
      to its src attribute. (Use the Image constructor 
      for this!)
    - listen out for a load event. If a load event is 
      detected, the promise should resolve, providing the
      image element.
    - listen out for an “error” event. If an error 
      event is detected, the promise should reject giving 
      the message “img has NOT loaded”.
*/
function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.alt = 'a beautiful scene';
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', () => reject('img has not loaded'));
  });
}

try {
  const results = await preLoadImg(
    'https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg'
  );
  console.log(results);
  document.getElementById('img-container').appendChild(results);
} catch (error) {
  console.error(error);
}
