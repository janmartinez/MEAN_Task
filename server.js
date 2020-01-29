console.log("server.js is running");
const express = require("express"),
          app = express(),
          port = process.env.PORT || 8001 ,
          path = require("path"),
          DB_Name= "restfultasks",
          mongoose = require('mongoose');

app.use(express.json());
app.use(express.static(__dirname + "/client/dist/client"));

require("./server/utils/mongoose")(DB_Name);
require("./server/utils/routes")(app);

app.all('*' , (req, res, next) => {
    res.sendFile(__dirname + '/client/dist/client/index.html');
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});