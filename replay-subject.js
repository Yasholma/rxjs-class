const { ReplaySubject } = require("rxjs");

const chatRoomSubject = new ReplaySubject(10);

const sendMessage = (userFrom, userMessage) => {
  chatRoomSubject.next(
    `At: ${new Date().toTimeString()} => ${userFrom}:${userMessage}`
  );
};

const john = chatRoomSubject.subscribe((val) => {
  console.log("----John Room----");
  console.log(val);
  console.log("------------------");
});

const mike = chatRoomSubject.subscribe((val) => {
  console.log("----Mike Room----");
  console.log(val);
  console.log("------------------");
});

setTimeout(() => sendMessage("john", "Hello, its John here"), 2000);
setTimeout(() => sendMessage("mike", "Hi everyone, I am Mike"), 300);
setTimeout(() => sendMessage("mike", "Hi John, how are you doing?"), 2500);

setTimeout(() => {
  const tim = chatRoomSubject.subscribe((val) => {
    console.log("----Tim Room----");
    console.log(val);
    console.log("------------------");
  });
}, 3000);
