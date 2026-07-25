import fs from "fs";

fs.writeFileSync("createFileUsingFs.txt", "1.hello Noor Are you available");


fs.readFile("createFileUsingFs.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error :", err);
    return;
  }
  console.log("3. Data of File:", data);
});

const readedData = fs.readFileSync("createFileUsingFs.txt", "utf-8");
console.log("3.readed data", readedData);




fs.mkdir('my_logs', (err) => {
  if (err) console.log("Folder banane mein error:", err);
  else console.log("Folder ban gaya!");
});

fs.mkdirSync('logs/2026/july', { recursive: true });