import fs from "fs";
console.log("hello 1");

// fs.writeFileSync("notes.txt","hello")




// fs.appendFile("notes.txt", "const num = 15", (err)=>{
//     if(err){
//         console.log("file error",err)
//     }
// })

fs.unlink("notes.txt",(err)=>{
    console.log("error",err)
})

// fs.appendFileSync("notes.txt", "new data added")



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

// fs.readdir("./", { recursive: true }, (err, files) => {
//   if (err) console.log(err);
//   else console.log("File lists:", files);
// });

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
