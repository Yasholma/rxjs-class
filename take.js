const { from } = require("rxjs");
const { take } = require("rxjs/operators");

const observable$ = from(["a", "b", "c", "d", "e"]);

observable$.pipe(take(3)).subscribe(console.log);
