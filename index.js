//import express, body-parser
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {
  listBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
  createAccountController,
  listAccountController,
} = require("./controllers");

//Create express server instance
const server = express();
//Middlewares[body-parser]
server.use(bodyParser.json());

//routes
// view banks - get method
server.get("/banks/:id?", listBanksController);
// create bank - post method
server.post("/bank", createBankController);
// update bank - put/patch method
server.put("/bank", updateBankController);
// delete bank - delete method
server.delete("/bank", deleteBankController);
// create account - post method
server.post("/account", createAccountController);
// view accounts - with get method
server.get("/accounts/:id?", listAccountController);

//start server
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://cokerolufemigbolahan:gbossey1234@cluster0.lqes6k1.mongodb.net/bankservice_db?retryWrites=true&w=majority"
  )
  .then((result) => {
    server.listen(3000, () => console.log("server is ready!"));
    console.log("Connected to the Mongoose DB!");
  })
  .catch((err) => console.log(err));
