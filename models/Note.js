var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var NoteSchema = new Schema({
  // `noteText` is of type String
  noteText: String
});


var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
