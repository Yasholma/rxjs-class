const { Subject } = require("rxjs");
const { map } = require("rxjs/operators");

const dataSubject = new Subject();

const produceData = (val) => {
  dataSubject.next(val);
};

const consumeData = () => {
  return dataSubject.pipe(map((val) => "data - " + val));
};

const producers = {
  producer1: () => produceData(1),
  producer2: () => produceData(2),
  producer3: () => produceData(3),
};

const consumers = {
  consumer1: () =>
    consumeData().subscribe((val) => {
      console.log("Consumer 1 received: " + val);
    }),
  consumer2: () =>
    consumeData().subscribe((val) => {
      console.log("Consumer 2 received: " + val);
    }),
  consumer3: () =>
    consumeData().subscribe((val) => {
      console.log("Consumer 3 received: " + val);
    }),
};

consumers.consumer1();
producers.producer1();
producers.producer2();

consumers.consumer2();
consumers.consumer3();

producers.producer3();
