const mongoose = require("mongoose");
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

const Text = mongoose.model("Text", textSchema);
module.exports = Text;
