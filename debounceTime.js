const { Observable } = require("rxjs");
const { debounceTime } = require("rxjs/operators");

const observable$ = new Observable((observer) => {
  setTimeout(() => observer.next("r"), 20);
  setTimeout(() => observer.next("XX"), 1000);
  setTimeout(() => observer.next("j"), 35);
  setTimeout(() => observer.next("s"), 50);

  setTimeout(() => observer.next("i"), 120);
  setTimeout(() => observer.next("CC"), 2000);

  setTimeout(() => observer.next("u"), 180);
  setTimeout(() => observer.next("s"), 200);
  setTimeout(() => observer.next("e"), 210);
  setTimeout(() => observer.next("f"), 220);
  setTimeout(() => observer.next("u"), 240);
  setTimeout(() => observer.next("LL"), 5000);
});

observable$
  .pipe(debounceTime(1000))
  .subscribe((val) =>
    console.log("Making an HTTP request! Current value is: " + val)
  );
