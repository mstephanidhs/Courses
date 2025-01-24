// const emojis = ['🐥', '🐯', '🐼'];
// console.log(emojis.includes('🐥'));

/*
Challenge:
1. Add an if else to the event listener's function.
2. Only add an item to the shoppingList array if it
   is not already in the shoppingList array.
3. If an item is a duplicate, clear the input field
   and log out "no duplicates".
*/

const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const list = document.getElementById('list');

const shoppingList = [];
addItemBtn.addEventListener('click', function () {
  if (!shoppingList.includes(itemInput.value)) {
    shoppingList.push(itemInput.value);
    render();
  } else {
    console.log('No duplicates');
  }

  itemInput.value = '';
});

function render() {
  let html = '';
  for (let item of shoppingList) {
    html += `<li class="list-item">${item}</li>`;
  }
  list.innerHTML = html;
}

render();
