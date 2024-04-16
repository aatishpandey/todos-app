const { createTodoSchema, updateTodoSchema } = require("./types");
const { todoModel } = require("./db");
const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json()); //body parser

//*** create todos ***
app.post("/todo", async (req, res) => {
  try {
    createTodoSchema.parse(req.body);

    //create new todo
    const todo = new todoModel({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    });

    //save to database
    try {
      await todo.save();
      res.send("todo created");
    } catch (err) {
      console.log("Error creating todo", err);
      res.json({ Error: "Error creating todo" });
    }
  } catch (err) {
    console.log(err);
    res.json({ Error: "Cannot create Todo, please check the request body" });
  }
});

//*** get todos ***
app.get("/todos", async (req, res) => {
  try {
    const todos = await todoModel.find({});
    res.json(todos);
  } catch (err) {
    console.log(err);
    res.json("Error fetching todos");
  }
});

//*** update todos ***
app.put("/completed", async (req, res) => {
  try {
    updateTodoSchema.parse(req.body);
    await todoModel.findByIdAndUpdate(req.body.id, { completed: true });
    res.send("Todo Updated");
  } catch (err) {
    console.log(err);
    res.json({ Error: "Error updating Todo, please check the request body" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
