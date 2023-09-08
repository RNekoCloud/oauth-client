"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
// Test route
app.get("/api", function (_, res) {
    res.json({
        message: "Hello world",
    });
});
app.get("/verify/:token", function (req, res) {
    var token = req.params.token;
    res.json({
        message: token,
    });
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
