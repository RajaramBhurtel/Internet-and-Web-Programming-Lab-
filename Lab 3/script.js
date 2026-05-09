const studentName = "Rajaram Bhurtel";
const log = (msg) => console.log(msg);
const add = (a, b) => a + b;
function processNumber(num, callback) {
  return callback(num);
}
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data received for ${studentName}`);
    }, 1000);
  });
}
async function getData() {
  const data = await fetchData();
  log("Async/Await: " + data);
}
function runDemo() {
  log("Student Name: " + studentName);
  log("Arrow Function: 5 + 3 = " + add(5, 3));
  const result = processNumber(4, (x) => x * x);
  log("Callback: Square of 4 = " + result);
  fetchData().then((data) => {
    log("Promise: " + data);
  });
  getData();
}
runDemo();
