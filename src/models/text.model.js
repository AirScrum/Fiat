import mongoose from "mongoose";
const Schema = mongoose.Schema;

const textSchema = new Schema(
  {
    textContent: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Text = mongoose.model("Text", textSchema);
