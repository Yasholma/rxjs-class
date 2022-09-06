const { of } = require("rxjs");
const { map } = require("rxjs/operators");

const DATA_SOURCE = [
  "String 1",
  "String 2",
  "Yet another string",
  "I am the last string",
];

const observableArray$ = of(DATA_SOURCE);
console.log("Array data source");
observableArray$.subscribe(console.log);

console.log("\n");
console.log("Sequence data source");
const observableSequence$ = of(
  "String 1",
  "String 2",
  "Yet another string",
  "I am the last string"
);

observableSequence$.subscribe(console.log);

const obCodexy$ = of({ name: "John", age: 24 }).pipe(
  map(({ name, age }) => `${name} has age ${age}`)
);
console.log("\n");
obCodexy$.subscribe(console.log);
