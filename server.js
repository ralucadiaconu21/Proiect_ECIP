require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");
const messageRoutes = require("./routes/message.routes");
const assistant = new AssistantV2({
  authenticator: new IamAuthenticator({ apikey: process.env.WATSON_API_KEY }),
  url: process.env.WATSON_URL,
  version: "2019-02-28",
  disableSslVerification: true
});
//server init;
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/message", messageRoutes);
app.listen(port, () => {
  console.warn("Server is up and running on port " + port);
});

exports.getAssistant = () => {
  return assistant;
};
