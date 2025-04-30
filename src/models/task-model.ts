import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: "in-progress" },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", TaskSchema);
