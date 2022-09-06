const { Observable } = require("rxjs");

const wrapArrayInToObservable = (array) => {
  return new Observable((subscriber) => {
    for (const item of array) {
      subscriber.next(item);
    }
  });
};

const data = [1, 2, 3, 4, 5];

const observable = wrapArrayInToObservable(data);

observable.subscribe((val) => console.log(`Subscriber 1: ${val}`));
observable.subscribe((val) => console.log(`Subscriber 2: ${val}`));
