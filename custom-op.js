const { of, Observable } = require("rxjs");
const { map } = require("rxjs/operators");

// const clone = () => (source) => source.pipe(map((data) => ({ ...data })));
const clone = () => (source) => {
  return new Observable((subscriber) => {
    const subscription = source.subscribe({
      next: (value) => {
        subscriber.next({ ...value });
      },
      error: (error) => {
        subscriber.error(error);
      },
      complete: () => {
        subscriber.complete();
      },
    });

    return () => subscription.unsubscribe();
  });
};

const formData = {
  username: "james123",
  name: "James",
  surname: "Smith",
  age: 31,
};

of(formData)
  .pipe(clone())
  .subscribe((receivedData) => {
    receivedData.username = receivedData.username + "_random";
    console.log(`New username: ${receivedData.username}`);
  });

setTimeout(() => console.log("Old username: " + formData.username));
