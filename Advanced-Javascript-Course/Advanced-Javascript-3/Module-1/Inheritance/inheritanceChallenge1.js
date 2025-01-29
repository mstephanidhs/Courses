function Event(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;
}

Event.prototype.getDetails = function () {
  return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
};

/*
Challenge:
    1. Set up a constructor for 'Conference' which
       should take in 'keynoteSpeaker' as a parameter.
    2. 'Conference' should inherit from 'Event'.
    3. 'Conference' should have its own method 'getDetails'
       which calls Event's getDetails method and returns a string
       with name, location, date, and keynote speaker.
    4. When you set up an instance of Conference and call
       getDetails you should log out:
       Event: 10 Nights of JS, Location: Scrimba HQ, Date: 2025-09-29 Keynote Speaker: Ashley Smith
       📝 The new method should be on the prototype.
*/

function Conference(name, location, date, keynoteSpeaker) {
  Event.call(this, name, location, date);
  this.keynoteSpeaker = keynoteSpeaker;
}

Conference.prototype = Object.create(Event.prototype);
Conference.prototype.constructor = Conference;

Conference.prototype.getDetails = function () {
  const eventBasics = Event.prototype.getDetails().call(this);
  return `${eventBasics} Keynote Speaker: ${this.keynoteSpeaker}`;
};

const conference = new Conference(
  '10 Nights of JS',
  'Scrimba HQ',
  '2025-09-29',
  'Ashley Smith'
);
console.log(conference.getDetails());
