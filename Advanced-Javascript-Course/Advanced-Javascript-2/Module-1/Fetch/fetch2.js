async function getDogImage() {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageElement = document.createElement('img')
    imageElement.src = data.message
    imageElement.alt = 'random dog picture'
    document.getElementById('img-container').appendChild(imageElement)

    console.log(data);
}

getDogImage();

// modular javascript -> exporting/importing multiple files
//SyntaxError: await is only valid in async functions and the top level bodies of modules