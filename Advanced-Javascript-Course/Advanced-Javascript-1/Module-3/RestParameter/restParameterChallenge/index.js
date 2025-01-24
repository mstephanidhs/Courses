const renderCard = (text, sender, recipientName) =>
  `<div class="label-card">
      <p>Dear ${recipientName} </p>
      <p>${text}</p>
      <p>Best wishes,</p>
      <p>${sender}</p>
  </div>`;

function getLabelsHtml(text, sender, ...recipients) {
  /*
    Challenge:
    1. Add parameters.
    2. Update the HTML template where you
       see **NAME**.
    3. Return HTML template for each label.
    */
  return recipients.map((recipient) => renderCard(text, sender, recipient.name)).join('');
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁';
const sender = 'Tom';

document.getElementById('labels-container').innerHTML = getLabelsHtml(
  text,
  sender,
  { name: 'Sally' },
  { name: 'Mike' },
  { name: 'Rob' },
  { name: 'Harriet' }
);
