const path = require("path");

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
