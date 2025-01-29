class Event {
  constructor(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
  }

  getDetails() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
  }
}

/*
Challenge:
    1. Set up a class 'TennisMatch' which
       should take in 'player1' and 'player2' as parameters.
    2. 'TennisMatch' should inherit properties and methods
       from 'Event'.
    3. 'TennisMatch' should have its own method 'getDetails'
       which calls Event's getDetails method to get the
       basic details of the event. It should return this string:
       ${eventBasics} Match: ${this.player1} vs ${this.player2}
    4. Uncomment my code below to create a new instance of TennisMatch
       and call the getDetails method.
       Hint.md for help 🛟
*/

class TennisMatch extends Event {
  constructor(name, location, date, player1, player2) {
    super(name, location, date);
    this.player1 = player1;
    this.player2 = player2;
  }

  getDetails() {
    const eventBasics = super.getDetails();
    return `${eventBasics} Match: ${this.player1} vs ${this.player2}`;
  }
}

const tennisMatch = new TennisMatch(
  'Grand Slam Final',
  'Wimbledon',
  '2025-07-15',
  'J Bloggs',
  'B Doe'
);
console.log(tennisMatch.getDetails());
