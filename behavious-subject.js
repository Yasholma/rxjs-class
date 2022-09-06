const { BehaviorSubject } = require("rxjs");

const defaultWelcomeMessage = "Welcome to the chat room";
const chatRoomSubject = new BehaviorSubject(defaultWelcomeMessage);

const sendMessage = (userFrom, userMessage) => {
  chatRoomSubject.next(
    `At: ${new Date().toISOString()} => ${userFrom}:${userMessage}`
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

setTimeout(() => {
  const tim = chatRoomSubject.subscribe((val) => {
    console.log("----Tim Room----");
    console.log(val);
    console.log("------------------");
  });
}, 3000);
