const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Ajaycloud:Ajaycloud1234@ajaycloud.bncjx7d.mongodb.net/MernBlog?retryWrites=true&w=majority&appName=Ajaycloud").then(() => {
    console.log("database is connected");
}).catch((err) => {
    console.log(err);
})
const app = express();

app.listen("3000", () => {
    console.log("server is running at 3000");
})