const { from, Observable } = require("rxjs");
const { tap, filter, map } = require("rxjs/operators");

const getAsyncObservable = (array) => {
  return new Observable((subscriber) => {
    subscriber.next(array[0]);
    for (let item of array.slice(1)) {
      setTimeout(() => subscriber.next(item), 100);
    }
  });
};

const arrayDataObservable$ = getAsyncObservable([1, 2, 3, 4, 5]);

const dataPipeline = arrayDataObservable$.pipe(
  tap((val) => console.log(`Value passing through the stream: ${val}`)),
  filter((val) => val > 2),
  map((val) => val * 2)
);

const subscribeToBaseObservable = (subscriberName) => {
  return arrayDataObservable$.subscribe((val) => {
    console.log(`${subscriberName} received: ${val}`);
  });
};

const subscribeToDataPipeline = (subscriberName) => {
  return dataPipeline.subscribe((val) => {
    console.log(`${subscriberName} received: ${val}`);
  });
};

const handleSubscriptionToBaseObservable = () => {
  const subscription1 = subscribeToBaseObservable("Subscriber1");
  const subscription2 = subscribeToBaseObservable("Subscriber2");
};

const handleSubscriptionToDataPipeline = () => {
  const subscription1 = subscribeToDataPipeline("Subscriber1");
  const subscription2 = subscribeToDataPipeline("Subscriber2");
};

// handleSubscriptionToBaseObservable();
handleSubscriptionToDataPipeline();
