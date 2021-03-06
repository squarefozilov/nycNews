var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
 
  headline: {
    type: String,
    required: true
  },
  // `url` is required and of type String
  url: {
    type: String,
    required: true
  },
  // `summary` is required and of type String
  summary: {
    type: String,
    required: true
  },
  // `save` is required and of type String
  saved: {
    type: Boolean,
    default: false
  },
  
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
