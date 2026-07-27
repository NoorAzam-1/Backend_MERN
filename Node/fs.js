import fs from "fs";

// fs.writeFileSync("notes.txt", "1.hello Noor Are you available");

// fs.writeFile("createFileUsingFs.txt","nested file", (err)=>{
//   if(err){
//     console.log(err);
//     return
//   }
// })

// fs.appendFileSync('notes.txt', '\n Second Note: Logging active.');

// fs.appendFile('notes.txt', '\n Third Note: Server restarted.', (err) => {
//   if (err) console.log(err);
//   else console.log("New Notes appended!");
// });

// const readedData = fs.readFileSync("notes.txt", "utf-8");
// console.log("3.readed data", readedData);

// const readedDataAsync = fs.readFile("notes.txt", "utf-8", (err, data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

fs.readdir("./", { recursive: true }, (err, files) => {
  if (err) console.log(err);
  else console.log("File lists:", files);
});

// fs.unlink('notes.txt', (err) => {
//   if (err) {
//     console.log("Error deleting file", err);
//     return;
//   }
//   console.log("File deleted successfully!");
// });

// fs.mkdirSync("logs", { recursive: true });

// fs.mkdir("my_logs", (err) => {
//   if (err) console.log("Folder error:", err);
//   else console.log("Folder created!");
// });
