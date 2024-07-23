const express = require("express");
const mongoose = require("mongoose");
const companyRouter = require("./routes/company");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/companies", companyRouter);

mongoose
  .connect("mongodb://localhost:27017/companyDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
