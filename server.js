const express = require("express");
const app = express();

app.use(express.static(__dirname+"/"));

app.listen(3500);
console.log("express is working")