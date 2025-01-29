function Event(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;
}

/*
Challenge:
    1. Remove getDetails from the Event constructor's body
       and add it to the Event constructor’s prototype.
*/

Event.prototype.getDetails = function () {
  return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
};

Event.prototype.cancelEvent = function () {
  return 'Event Cancelled';
};

function Concert(name, location, date, headliner) {
  Event.call(this, name, location, date);
  this.headliner = headliner;
}

// reference to another object, by defautl to the base object
Concert.prototype = Object.create(Event.prototype);
// it has initialized with the event constructor
// that is not what we want
// so I give the consructor of the concert
Concert.prototype.constructor = Concert;

Concert.prototype.getDetails = function () {
  const eventBasics = Event.prototype.getDetails().call(this);
  return `${eventBasics} Headliner: ${this.headliner}`;
};

const concert = new Concert(
  'Summer Beats',
  'City Stadium',
  '2024-07-15',
  'The Electrons'
);
const concert2 = new Concert(
  'Happy days',
  'Highlands Park',
  '2024-08-08',
  'Dave Notes'
);
const concert3 = new Concert('Lush Vibes', 'Wembley', '2024-03-08', 'Si Twig');
console.log(concert.getDetails());
console.log(concert2.getDetails());
console.log(concert3.getDetails());

// The call method is used to call a function with a specified
// 'this' values and arguments
