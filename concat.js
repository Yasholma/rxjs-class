const { concat, of, Subject } = require("rxjs");

const httpRequest$ = new Subject();

concat(of("btn click"), httpRequest$).subscribe((val) => {
  console.log(val);
});

setTimeout(() => {
  httpRequest$.next("Response from server");
}, 1000);
