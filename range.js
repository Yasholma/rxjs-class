const { range } = require("rxjs");

const data = ["item 1", "item 2", "item 3"];
const observableRange$ = range(0, data.length);

observableRange$.subscribe((index) => console.log(data[index]));

// const obCode$ = range(0, 100);
// obCode$.subscribe(console.log);
