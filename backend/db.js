

const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.MONGODB_URL;

//handle connection to MongoDB
async function connectToMongoDB() {
    try {
      await mongoose.connect(dbUrl);
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log("Error connecting to DB", err);
    }
  }
  connectToMongoDB();

  //mongoose schema
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: { type: Boolean, default: false },
  });
  

//mongoose model from schema
const todoModel = mongoose.model("Todos", todoSchema);

module.exports = {
    todoModel
}