/* eslint-disable no-unused-vars */
const express = require("express");
const api = require("../api.json");

const app = express();

app.use(express.json({ extended: false }));

// fetching data from api.json
app.get("/identificationData", (req, res) => {
  // Should solve the cors error
  res.header("Access-Control-Allow-Origin", "*");
  res.send(api.identificationData);
});
app.get("/addresses", (req, res) => {
  // Should solve the cors error
  res.header("Access-Control-Allow-Origin", "*");
  res.send(api.addresses);
});
app.get("/contactInformation", (req, res) => {
  // Should solve the cors error
  res.header("Access-Control-Allow-Origin", "*");
  res.send(api.contactInformation);
});
app.get("/services", (req, res) => {
  // Should solve the cors error
  res.header("Access-Control-Allow-Origin", "*");
  res.send(api.services);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
