function displayTrafficLight(light){
    console.log(light)
}

// the function is invoked immediately (because of the brackets) without the pause of 3000ms
// setTimeout(displayTrafficLight('🟢'), 3000)
// so we pass the params of the function after the delay
setTimeout(displayTrafficLight, 3000, '🟢')


displayTrafficLight('🔴')