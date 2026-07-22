const fs = require("fs");

// Created File
fs.writeFileSync("createFileUsingFs.txt", "hello Noor Are you Free Free");

// Asynchronous read file
fs.readFile("createFileUsingFs.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error :", err);
    return;
  }
  console.log("3. File ka data aa gaya:", data);
});

// Synchronous Read File
const readedData = fs.readFileSync("createFileUsingFs.txt", "utf-8");
console.log("readed data", readedData);




