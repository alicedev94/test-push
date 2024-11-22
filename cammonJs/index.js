const express = require("express");

const cors = require("cors");

const { init, sendNotification } = require('i11rzed3m-server');

const app = express();

const port = 3000;

// Settings
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("/ cammonJS ");
});

app.post("/send-notification", async (req, res) => {
  const { subscription, payload } = req.body;
  init('BOj7mhqma4xxLqDH1bwkWCR-9MbuJsoA9Q9J0Y0mtjZ7MGWsM_h5183Lz2Q-sS8J-zPYATq-rXHPcud1THQoZ08', 'n5XxdtuTgq7snpC1e1MA9596ajT3hlpudmt-lvTtpaM');
  const response = await sendNotification(subscription, payload);
  res.json(response);
});

app.listen(port, console.log("Listen in port: ", port));
