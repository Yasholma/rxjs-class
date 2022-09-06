const { from } = require("rxjs");
const { takeWhile, skipWhile } = require("rxjs/operators");

const observable$ = from([0, 0, 0, 1, 0]);

console.log("Take While");
observable$.pipe(takeWhile((x) => x < 1)).subscribe(console.log);

console.log("Skip While");
observable$.pipe(skipWhile((x) => x < 1)).subscribe(console.log);
