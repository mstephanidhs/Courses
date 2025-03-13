var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var yellow = rootStyles.getPropertyValue('--yellow');
console.log('yellow: ', yellow);

root.style.setProperty('--yellow', 'orange');
