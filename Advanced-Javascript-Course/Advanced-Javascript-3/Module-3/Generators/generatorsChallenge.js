/*
Challenge:
    1. Create a generator that yields a random hex code on demand.
    - You might need to research how you can do something infinitely 
      inside a generator.
    - See if you can work out how to generate a random hex code.
    🛟 hint.md for help
*/

function* colorGenerator() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const ranNum = Math.floor(Math.random() * 16);
    color += '0123456789ABCDEF'[ranNum];
  }
  yield color;
}

document.getElementById('nextColorButton').addEventListener('click', () => {
  const generatedColor = colorGenerator();
  const result = generatedColor.next();
  const color = result.value;
  /*
  Challenge:
      2. When the "Next Color" button is clicked, update 
         the textContent and backgroundColor attributes below.
  */
  document.getElementById('colorText').textContent = color;
  document.getElementById('colorDisplay').style.backgroundColor = color;
});
