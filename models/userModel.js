const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogapp");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1024px-Windows_10_Default_Profile_Picture.svg.png",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
