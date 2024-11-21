const exprees = require("express");

const app = exprees();

const port = 3000;

app.get("/", function(req, res) {
    res.send("/ cammonJS ");
});

app.listen(port, console.log("Listen in port: ", port));