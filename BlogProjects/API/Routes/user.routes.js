const express = require("express");
const router = express.Router();
const  controlleruser  = require("../Controller/user.controllre.js")

router.get("/test",controlleruser);
module.exports = router;