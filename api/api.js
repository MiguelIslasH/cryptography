const express = require("express");
const app = express();
const CORS = require("cors");

const aes_256 = require("./aes_256");

app.use(CORS());
app.use(express.json());
app.use(express.urlencoded());

app.use("/aes_256", aes_256);

app.listen(5000, () => {
  console.log("App listening");
});
