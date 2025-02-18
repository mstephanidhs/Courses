/*Name this external file gallery.js*/
const imageContainer = document.getElementById('image');
const imageContainerPlaceholderText = imageContainer.innerHTML;

function upDate(previewPic) {
  /* In this function you should 
     1) change the url for the background image of the div with the id = "image" 
     to the source file of the preview image
     
     2) Change the text  of the div with the id = "image" 
     to the alt text of the preview image 
     */
  imageContainer.style.backgroundImage = `url(${previewPic.src})`;
  imageContainer.innerHTML = previewPic.alt;
}

function unDo() {
  /* In this function you should 
     1) Update the url for the background image of the div with the id = "image" 
     back to the orginal-image.  You can use the css code to see what that original URL was
     
     2) Change the text  of the div with the id = "image" 
     back to the original text.  You can use the html code to see what that original text was
     */
  imageContainer.style.backgroundImage = `url('')`;
  imageContainer.innerHTML = imageContainerPlaceholderText;
}

const images = [...document.getElementsByTagName('img')];
images.forEach((img) => img.setAttribute('tabindex', 0));
