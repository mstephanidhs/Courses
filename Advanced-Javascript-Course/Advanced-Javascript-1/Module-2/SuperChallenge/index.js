import contactsArr from './contactData';

/*
Challenge:
1. Wire up this search pattern app so that inputting
   a full or partial name brings up the matching
   contact or contacts.
*/

const patternSearchInput = document.getElementById('pattern-search-input');
const patternSearchSubmit = document.getElementById('pattern-search-submit');
const contactDisplay = document.getElementById('contact-display');

patternSearchSubmit.addEventListener('click', () => {
  findMatchingContacts(contactsArr, patternSearchInput.value);
});

const findMatchingContacts = (contactsArr, pattern) => {
  contactDisplay.innerHTML = '';
  const regex = new RegExp(pattern, 'i');
  contactsArr
    .filter((contact) => regex.test(contact.name))
    .forEach((contact) => renderContact(contact));
};

function renderContact(contactObj) {
  const contactCard = document.createElement('aside');
  contactCard.classList.add('contact-card');

  const nameElement = document.createElement('p');
  const emailElement = document.createElement('p');
  const phoneElement = document.createElement('p');

  nameElement.innerText = contactObj.name;
  emailElement.innerText = contactObj.email;
  phoneElement.innerText = contactObj.phone;

  contactCard.appendChild(nameElement);
  contactCard.appendChild(emailElement);
  contactCard.appendChild(phoneElement);

  contactDisplay.appendChild(contactCard);

  /*
    The CSS for contact-card has been done for you.
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card.
*/
}
