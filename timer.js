const { timer } = require("rxjs");

const fastObservable$ = timer(1000, 100);

const subscription = fastObservable$.subscribe(() =>
  console.log("100ms have passed")
);

setTimeout(() => {
  subscription.unsubscribe();
  console.log("1 second has passed");
}, 1000);
