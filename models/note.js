/**
 * Notes model - a mongoDB model for Notes.
 */

// Mongoose
const mongoose = require("mongoose");

// Create the schema
const noteSchema = new mongoose.Schema(
  {
    title: String,
    note: String,
    label: String,
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true
  }
);



// Create the model
const Notes = mongoose.model("Notes", noteSchema);

// Export
module.exports = Notes;
