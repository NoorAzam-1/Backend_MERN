import fs from "fs";

// fs.writeFileSync("notes.pdf","hello");

// fs.appendFileSync("notes.pdf", "new data added")

// fs.appendFile('notes.txt', '\n Third Note: Server restarted.', (err) => {
//   if (err) console.log(err);
//   else console.log("New Notes appended!");
// });


// fs.unlink('notes.txt', (err) => {
//   if (err) {
//     console.log("Error deleting file", err);
//     return;
//   }
//   console.log("File deleted successfully!");
// });



// const readedData = fs.readFileSync("notes.pdf","utf-8");
// console.log("3.readed data ", readedData);

fs.readFile("notes.txt", "utf-8", (err, data)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(data)
})


// fs.mkdirSync("folder/1", {recursive: true});


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



// fs.renameSync('archive_logs', "folder");
//   console.log("Folder rename successfully!");


// fs.rmdir('my_logs', (err) => {
//   if (err) console.log(err);
//   else console.log("Folder deleteted successfully!");
// });

// fs.rmSync('./folder', { recursive: true });

