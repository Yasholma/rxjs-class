const { from } = require("rxjs");
const { scan, last } = require("rxjs/operators");

// Static data source
const source = from([1, 2, 3, 4, 5]);

// Reduce values over time using scan
const sumSubscription = source
  .pipe(scan((acc, val) => acc + val))
  .subscribe((val) => console.log("Sum:", val));

// The simulation
setTimeout(() => sumSubscription.unsubscribe());
