const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogapp");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
