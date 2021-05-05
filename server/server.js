/* eslint-disable no-unused-vars */
const express = require("express");
const api = require("../api.json");


const app = express();

app.use(express.json({ extended: false }));

// fetching data from .json api
app.get("/", (req, res) => {
  // Should solve the cors error
  res.header("Access-Control-Allow-Origin", "*");
  res.send(api.data);
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
