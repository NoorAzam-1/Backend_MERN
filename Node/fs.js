import fs from "fs";

fs.writeFileSync("notes.txt", "1.hello Noor Are you available");

// fs.writeFile("createFileUsingFs.txt","nested file", (err)=>{
//   if(err){
//     console.log(err);
//     return
//   }
// })

// const readedData = fs.readFileSync("notes.txt", "utf-8");
// console.log("3.readed data", readedData);

// const readedDataAsync = fs.readFile("notes.txt", "utf-8", (err, data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// fs.mkdirSync("logs", { recursive: true });

// fs.mkdir("my_logs", (err) => {
//   if (err) console.log("Folder error:", err);
//   else console.log("Folder created!");
// });
