const express = require("express");
const app = express();

app.use(express.json);//body parser

app.post("/todo",(req,res)=>{
 
})

app.get("/todos", (req, res) => {
  res.send("No todos created!");
});

app.put("/completed",(req,res)=>{

})

app.listen(3000);
