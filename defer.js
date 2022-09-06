const { defer, of } = require("rxjs");

// Example 1 - throws an error because we need to return an Observable
const functionToBeExecutedOnSubscribe = () => {
  console.log("exectuing now");
};
const observable1$ = defer(functionToBeExecutedOnSubscribe);
observable1$.subscribe();

// Example 2
const functionToBeExecutedOnSubscribeReturnsObservable = () =>
  of("val1", "val2");
const observable2$ = defer(functionToBeExecutedOnSubscribeReturnsObservable);
observable2$.subscribe(console.log);
