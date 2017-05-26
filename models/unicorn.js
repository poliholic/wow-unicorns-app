var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wow-unicorns-app");

var Schema = mongoose.Schema;

var unicornSchema = new Schema({
  name: String,
  sparkles: Boolean,
  number_of_horns: {
    type: Number,
    default: 1
  }
});

var Unicorn = mongoose.model("Unicorn", unicornSchema);
module.exports = Unicorn;