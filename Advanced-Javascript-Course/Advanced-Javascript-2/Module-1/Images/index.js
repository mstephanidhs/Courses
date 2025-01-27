// const image = document.createElement('img');
// image.src = 'http://...';
// console.log(image);

// When using the Image Constructor, the Image starts
// loading as soon as the src attribute has been set
// so for preloading it makes sense to do it this way
const image = new Image();
image.src = 'http://...';

console.log(image);

/*
Challenge:
1. Create two event listeners. One should listen 
   out for the image loading and log “Image has 
   loaded”. The other should listen for an error 
   and log “Image has NOT loaded”.
*/
image.addEventListener('load', () => console.log('Image has loaded'));
image.addEventListener('error', () => console.log('Image has NOT loaded'));
