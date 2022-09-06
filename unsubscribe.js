const { Observable } = require("rxjs");

const getAsynchronousObservable = () => {
  return new Observable((subscriber) => {
    intervalId = setInterval(() => subscriber.next("async value"), 500);

    return () => clearInterval(intervalId);
  });
};

const arrayDataObservable$ = getAsynchronousObservable();

const subscribeToBaseObservable = (subscriberName) => {
  return arrayDataObservable$.subscribe((val) => {
    console.log(`${subscriberName} received: ${val}`);
  });
};

const subscriber = subscribeToBaseObservable("Subscriber 1");

var UNSUBSCRIBE_TIMEOUT_VALUE = 1600;
setTimeout(() => {
  subscriber.unsubscribe();
}, UNSUBSCRIBE_TIMEOUT_VALUE);
