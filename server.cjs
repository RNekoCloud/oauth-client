"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
// Serving React App
app.use("/", express.static(path.join(__dirname, "dist")));
app.get("/api/v1", function (req, res) {
    res.json({
        message: "API Version 1.0.0",
        success: true,
        status: 200,
    });
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
