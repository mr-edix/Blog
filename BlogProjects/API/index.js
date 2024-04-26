const express = require("express");
const mongoose = require("mongoose");
const routerr = require("./Routes/user.routes.js")
mongoose.connect("mongodb+srv://Ajaycloud:Ajaycloud1234@ajaycloud.bncjx7d.mongodb.net/MernBlog?retryWrites=true&w=majority&appName=Ajaycloud").then(() => {
    console.log("database is connected");
}).catch((err) => {
    console.log(err);
})
const app = express();
app.use(express.json());

app.listen("3000", () => {
    console.log("server is running at 3000");
})
app.use("/api",routerr)
