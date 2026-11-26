import fs from "fs";

//Creating File
// fs.writeFileSync("note.txt", "utf-8");

// console.log("2")

// Creating File Async
// fs.writeFile("notes.txt", "asdfghjk", (err, result)=>{
//   return console.log(result)
// });

// console.log("3")

// fs.appendFileSync("notes.pdf", "new data added")

// fs.appendFile('notes.pdf', '\n Third Note: Server restarted.', (err) => {
//   if (err) console.log(err);
//   else console.log("New Notes appended!");
// });

// fs.unlinkSync("notes.pdf");

// fs.unlink('notes.pdf', (err) => {
//   if (err) {
//     console.log("Error deleting file", err);
//     return;
//   }
//   console.log("File deleted successfully!");
// });

// const readedData = fs.readFileSync("notes.pdf","utf-8");
// console.log("readed data== ", readedData);
   
// fs.readFile("notes.pdf", "utf-8", (err, data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// fs.mkdirSync("folder");

// fs.mkdirSync("folder1/folder2", { recursive: true });

// fs.mkdir("my_logs", (err) => {
//   if (err) console.log("Folder error:", err);
//   else console.log("Folder created!");
// });

// const readdir = fs.readdirSync("./folder");
// console.log("readdir",readdir)

// fs.readdir("./", { recursive: true }, (err, files) => {
//   if (err) console.log(err);
//   else console.log("File lists:", files);
// });

// fs.rmdir('my_logs', (err) => {
//   if (err) console.log(err);
//   else console.log("Folder deleteted successfully!");
// });

// fs.rmSync('./folder', { recursive: true });

fs.renameSync("folder", "archive_logs");
console.log("Folder rename successfully!");
