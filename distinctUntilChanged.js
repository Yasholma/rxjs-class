const { from } = require("rxjs");
const { distinctUntilChanged } = require("rxjs/operators");

// const observable$ = from([1, 1, 1, 2, 3, 4, 5, 6]);
const observable$ = from(
  ["a", "A", "b", "c", "d"].toLocaleString().toLocaleLowerCase().split(",")
);

observable$.pipe(distinctUntilChanged()).subscribe(console.log);
