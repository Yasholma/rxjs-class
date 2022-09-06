const { from } = require("rxjs");

const sourceA = from([2, 12, 35]);
sourceA.subscribe(console.log);

const sourceB = from("a");
sourceB.subscribe(console.log);

const successPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("success");
  }, 2000);
});

const aSourceB = from(successPromise);
aSourceB.subscribe(console.log);

console.log("Waiting for success promise");
