// console.log("hello");

// import {add, subtract} from "./math.js";
// console.log(add(3,2));
// console.log(math.add(12,3));
// console.log(math.subtract(12,3));





import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to My Backend Server!');
});


app.get("/about", (req,res)=>{
    res.send("This is my about page")
})

app.get("/contact", (req,res)=>{
    res.send("this is our contact page")
})


app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
