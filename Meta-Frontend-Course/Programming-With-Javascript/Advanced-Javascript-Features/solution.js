// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(dairy) {
    
    for (item of dairy) 
        console.log(item); 
}

logDairy(dairy);

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(bird) {

    for (entry of Object.entries(bird))
        console.log(`${entry[0]}: ${entry[1]}`);
}

birdCan(bird);

// Task 3
function animalCan(bird) {

    for (property in bird)
        console.log(`${property}: ${bird[property]}`);   
}

animalCan(bird);

