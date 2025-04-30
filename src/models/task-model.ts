// Importing mongoose to define schema and model
import mongoose from "mongoose";
// Define the schema for a Task
const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: "in-progress" },
  },
  { timestamps: true }
);
// Export the Task model, linked to the "tasks" collection in MongoDB
export const Task = mongoose.model("Task", TaskSchema);
