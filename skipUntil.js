const { Subject, interval } = require("rxjs");
const { skipUntil } = require("rxjs/operators");

const httpSubject$ = new Subject();

const observable$ = interval(100);

intervalObservableSub$ = observable$
  .pipe(skipUntil(httpSubject$))
  .subscribe(() => console.log("100ms have passed"));

setTimeout(() => {
  httpSubject$.next("The HTTP request was resolved");
  console.log("The HTTP request was resolved!");
}, 1000);

setTimeout(() => {
  intervalObservableSub$.unsubscribe();
}, 2000);
