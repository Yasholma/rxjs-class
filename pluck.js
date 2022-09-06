const { Subject } = require("rxjs");
const { pluck, map } = require("rxjs/operators");

// Keyboard events data source
const keyboard$ = new Subject();

const subscription = keyboard$
  // .pipe(pluck("keyCode")) // deprecated
  .pipe(map(({ keyCode }) => keyCode)) // recommended
  .subscribe((code) => console.log("key code received: " + code));

// The simulation
setTimeout(() => keyboard$.next({ data: "data1", keyCode: "y" }), 1000);
setTimeout(() => keyboard$.next({ data: "data2", keyCode: "m" }), 3000);
setTimeout(() => keyboard$.next({ data: "data3", keyCode: "Ctrl" }), 4000);
setTimeout(() => keyboard$.next({ data: "data4", keyCode: "Shift" }), 7000);

setTimeout(() => subscription.unsubscribe(), 10000);
