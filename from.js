const { from } = require("rxjs");

const DATA_SOURCE = [
  "String 1",
  "String 2",
  "Yet another string",
  "I am the last string",
];

const observable$ = from(DATA_SOURCE);
observable$.subscribe(console.log);
