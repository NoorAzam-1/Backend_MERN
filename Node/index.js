const fs = require("fs");
console.log("hello");

// const math = require("./math");
// console.log(math.add(12,3));
// console.log(math.subtract(12,3));

// FS Module

// fs.writeFileSync("createFileUsingFs.txt", "hello Noor");


fs.readFile("createFileUsingFs.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error :", err);
    return;
  }
  console.log("3. File ka data aa gaya:", data);
});

const readedData = fs.readFileSync("createFileUsingFs.txt", "utf-8");
console.log("readed data", readedData);








// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Welcome to My Backend Server!');
// });

// app.get('/about', (req, res) => {
//   res.send('Welcome to My About Page!');
// });

// app.listen(5000, () => {
//   console.log(`Server running on http://localhost:5000`);
// });
